'use strict';

var currentTabId;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  currentTabId = tabId;
  if (tab.active /*&& changeInfo.status == 'complete' &&*/) {
    checkGoogleAPI(tab.url);
    checkHTTPS(tab.url);
    checkWhitelist(tab.url);
  }
});


chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
});


