'use strict';

var alertActive = false;
var alertWindowId;
var currentTabId;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

  currentTabId = tabId;
  if (tab.active /*&& changeInfo.status == 'complete' &&*/) {
    if (!tab.url.includes("https://") && tab.url.includes("www")) {
      if (alertActive == false) {
        chrome.windows.create({'url': 'httpAlert.html', 'type': 'popup', 'width': 600, 'height': 700}, function(window) {
          alertWindowId = window.id;
        });
        alertActive = true;
      }
    }
  }
});

chrome.windows.onRemoved.addListener(function(windowId) {
  if (windowId == alertWindowId) {
    alertActive = false;

    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
      chrome.tabs.remove(arrayOfTabs[0].id, function() { });
    });
  }
});
