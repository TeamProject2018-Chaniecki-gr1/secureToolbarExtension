let loggerDiv = document.getElementById('logger');
let whitelistTA = document.getElementById('whitelist');
let whitelistCB = document.getElementById('whitelistEnabled');


const getLog = () => {
    chrome.storage.local.get({logs: []}, function (result) {
        let logs = result.logs;
        if (logs !== undefined) {
            let str = '';
            for (let i = 0, len = logs.length; i < len; i++) {
                str += logs[i].value + '<br/>';
            }
            loggerDiv.innerHTML = str;
        }
    });
}

const getWhiteList = () => {
    chrome.storage.local.get({whitelist: []}, function (result) {
        let whitelist = result.whitelist;
        let str = '';
        for (let i = 0, len = whitelist.length; i < len; i++) {
            str += whitelist[i].value + "\n";
        }
        whitelistTA.innerHTML = str;
    })
};

const updateWhiteList = () => {
    let newWhitelist = whitelistTA.value
    let wlArray = newWhitelist.split("\n");
    let  newWL = [];
    for (let i = 0, len = wlArray.length; i < len; i++) {
        newWL.push({value: wlArray[i].replace(/^\s+|\s+$/g, '')});
    }
    chrome.storage.local.set({whitelist: newWL}, function () {});
    if(whitelistCB.value === "enabled") {
        chrome.storage.local.set({whitelistEnabled: true});
    }
    else {
        chrome.storage.local.set({whitelistEnabled: false});
    }
}
  
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("updateWhitelistButton").addEventListener("click", updateWhiteList);
});


getLog();
getWhiteList();