'use strict';

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

  if (changeInfo.status == 'complete' && tab.active) {
    if (!tab.url.includes("https://")) {
      if (!confirm("This page is not secured! Do you want enter this site?")) {
        chrome.tabs.remove(tabId);
      }
    }
  }

});
