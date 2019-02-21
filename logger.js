const pushLog = logMessage => {
    chrome.storage.local.get({logs: []}, function (result) {
        let currentDate = new Date();
        let timestamp = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDay() + "  " 
            + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        let log = timestamp + " =>  " +  logMessage; 
        let logs = result.logs;
        logs.push({value: log});
        chrome.storage.local.set({logs: logs}, function () {
            chrome.storage.local.get('logs', function (result) {
                console.log(result.logs)
            });
        });
    });
}
  