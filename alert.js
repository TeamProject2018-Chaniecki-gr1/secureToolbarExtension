let alertActive = false;
let createAlert = () => {
    if (alertActive == false) {
        chrome.windows.create({'url': 'httpAlert.html', 'type': 'popup', 'width': 600, 'height': 700}, function(window) {
        alertWindowId = window.id;
        });
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
  