let reactToPageChanges = (details) => {
  if (/https:\/\/bamboo.sony.eu\/.*\/artifact$/.test(details.url)) {
    chrome.tabs.sendMessage(details.tabId, details, function (response) {
      // alert(response);
    });
  }
}
chrome.webNavigation.onCompleted.addListener(reactToPageChanges);
chrome.webNavigation.onHistoryStateUpdated.addListener(reactToPageChanges);