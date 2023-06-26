the app is: Chrome Extension for URL and Title Submission
---
the files we have decided to generate are: manifest.json, background.js, content.js, popup.html, popup.js

Shared dependencies:
1. Exported variables:
   - currentTabUrl
   - currentTabTitle

2. Data schemas: None

3. DOM element id names:
   - submitButton (in popup.html)

4. Message names:
   - getUrlAndTitle

5. Function names:
   - getCurrentTabInfo (in background.js)
   - openNewTabWithTemplate (in background.js)
   - handleMessage (in content.js)
   - submitUrlAndTitle (in popup.js)
   - addClickListener (in popup.js)