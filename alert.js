let alertActive = false;
let alertWindowId;

let createAlert = (type) => {
    if (alertActive == false) {
      if(type === "HTTPS") {
        chrome.windows.create({'url': 'alerts/alertHTTPS.html', 'type': 'popup', 'width': 600, 'height': 700}, function(window) {
          alertWindowId = window.id;
        });
      }
      else if (type === "GoogleAPI") {
        chrome.windows.create({'url': 'alerts/alertGoogleAPI.html', 'type': 'popup', 'width': 600, 'height': 700}, function(window) {
          alertWindowId = window.id;
        });
      }
      else if (type === "Whitelist") {
        chrome.windows.create({'url': 'alerts/alertWhitelist.html', 'type': 'popup', 'width': 600, 'height': 700}, function(window) {
          alertWindowId = window.id;
        });
      }
      alertActive = true;
    }
}

chrome.windows.onRemoved.addListener(function(windowId) {
    if (windowId == alertWindowId) {
      alertActive = false;
      chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        chrome.tabs.remove(arrayOfTabs[0].id, function() { });
      });
    }
  });
  