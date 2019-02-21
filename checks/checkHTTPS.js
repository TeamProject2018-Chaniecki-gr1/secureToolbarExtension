const checkHTTPS = (url) => {
    if (!url.includes("https://") && url.includes("www")) {
      pushLog("Attempted to connect to " + url + ",  which didn't have HTTPS certificate.");
      createAlert();
    }
}