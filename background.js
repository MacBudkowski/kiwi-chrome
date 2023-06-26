chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "getUrlAndTitle") {
    getCurrentTabInfo().then((tabInfo) => {
      openNewTabWithTemplate(tabInfo.currentTabUrl, tabInfo.currentTabTitle);
    });
  }
});

async function getCurrentTabInfo() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      resolve({
        currentTabUrl: currentTab.url,
        currentTabTitle: currentTab.title,
      });
    });
  });
}

chrome.action.onClicked.addListener((tab) => {
  getCurrentTabInfo().then((tabInfo) => {
    openNewTabWithTemplate(tabInfo.currentTabUrl, tabInfo.currentTabTitle);
  });
});

function openNewTabWithTemplate(url, title) {
  const template = `https://news.kiwistand.com/submit?url=${encodeURIComponent(
    url
  )}&title=${encodeURIComponent(title)}`;
  chrome.tabs.create({ url: template });
}
