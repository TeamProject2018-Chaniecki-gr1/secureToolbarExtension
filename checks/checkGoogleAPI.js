const checkGoogleAPI = (url) =>  {
    const baseURL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyCqjImkUDL3HpT2b3UAFrihUk4UOkh_7eY';
    console.log(url);
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
            {"url": url}
          ]
        }
      },
      { headers: {
        'Content-Type': 'application/json'
      }}
    )
    .then(function (response) {
      if(response.status === 200 && Object.entries(response.data).length !== 0) {
        pushLog("Attempted to connect to " + url + ",  which was flagged as malicious.");
        createAlert();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };