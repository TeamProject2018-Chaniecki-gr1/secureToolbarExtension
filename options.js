let loggerDiv = document.getElementById('logger');

const getLog = () => {
    chrome.storage.local.get({logs: []}, function (result) {
        let logs = result.logs;
        if (logs !== undefined) {
            let str = '';
            for (let i = 0, len = logs.length; i < len; i++) {
                console.log(logs[i]);
                str += logs[i].value + '<br/>';
            }
            loggerDiv.innerHTML = str;
        }
    });
}

getLog();