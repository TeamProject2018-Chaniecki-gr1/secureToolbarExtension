'use strict';

var currentTabId;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  currentTabId = tabId;
  if (tab.active /*&& changeInfo.status == 'complete' &&*/) {
    checkGoogleAPI(tab.url);
    checkHTTPS(tab.url);
  }
});

