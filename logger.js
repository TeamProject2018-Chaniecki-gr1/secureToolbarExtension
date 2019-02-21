const pushLog = logMessage => {
    chrome.storage.local.get({logs: []}, function (result) {
        let log = Date.now().toString() + ": " +  logMessage; 
        let logs = result.logs;
        logs.push({value: log});
        chrome.storage.local.set({logs: logs}, function () {
            chrome.storage.local.get('logs', function (result) {
                console.log(result.logs)
            });
        });
    });
}

  
  