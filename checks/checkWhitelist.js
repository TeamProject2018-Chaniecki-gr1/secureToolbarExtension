const checkWhitelist = (url) => {
    if (url.includes("https://")) {
        let isVerified = false;
        chrome.storage.local.get({whitelist: []}, function (result) {
            let whitelist = result.whitelist;
            console.log("SYYYF");
            for (let i = 0, len = whitelist.length; i < len; i++) {
                console.log(url);
                console.log(whitelist[i].value);
                if(url.includes(whitelist[i].value)) {
                    console.log("OOOOF")
                    isVerified = true;
                }
            }
            console.log("ISVERIFIED:",isVerified);
            if (!isVerified) {
                pushLog("Whitelist enabled, attempted to connect to " + url + ",  which was not defined on whitelist");
                createAlert("Whitelist");
            }
        })
    }
};