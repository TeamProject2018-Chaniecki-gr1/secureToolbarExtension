const checkWhitelist = (url) => {
    if (url.includes("https://")) {
        let isVerified = false;
        chrome.storage.local.get({whitelist: []}, function (result) {
            let whitelist = result.whitelist;
            for (let i = 0, len = whitelist.length; i < len; i++) {
                if(url.includes(whitelist[i].value)) {
                    isVerified = true;
                }
            }
            if (!isVerified) {
                pushLog("Whitelist enabled, attempted to connect to " + url + ",  which was not defined on whitelist");
                createAlert("Whitelist");
            }
        })
    }
};