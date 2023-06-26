document.addEventListener("DOMContentLoaded", addClickListener);

function addClickListener() {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", submitUrlAndTitle);
}

function submitUrlAndTitle() {
  chrome.runtime.sendMessage({ message: "getUrlAndTitle" }, (response) => {
    const { currentTabUrl, currentTabTitle } = response;
    const template = `https://news.kiwistand.com/submit?url=${encodeURIComponent(currentTabUrl)}&title=${encodeURIComponent(currentTabTitle)}`;
    chrome.tabs.create({ url: template });
  });
}