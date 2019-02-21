'use strict';

var alertWindowId;
var currentTabId;

const checkUrlWithGoogleAPI = (pageToCheck) =>  {
  const baseURL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyCqjImkUDL3HpT2b3UAFrihUk4UOkh_7eY';
  console.log(pageToCheck);
  axios.post(
    baseURL, 
    {
      "client": {
        "clientId":      "secureToolbar",
        "clientVersion": "1.0.0"
      },
      "threatInfo": {
        "threatTypes":      ["MALWARE", "SOCIAL_ENGINEERING"],
        "platformTypes":    ["WINDOWS"],
        "threatEntryTypes": ["URL"],
        "threatEntries": [
          {"url": pageToCheck}
        ]
      }
    },
    { headers: {
      'Content-Type': 'application/json'
    }}
  )
  .then(function (response) {
    if(response.status === 200 && Object.entries(response.data).length !== 0) {
      createAlert();
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  let pageUrl = window.location.toString();
  
  currentTabId = tabId;
  if (tab.active /*&& changeInfo.status == 'complete' &&*/) {
    checkUrlWithGoogleAPI(tab.url);
    if (!tab.url.includes("https://") && tab.url.includes("www")) {
      createAlert();
    }
  }
});

