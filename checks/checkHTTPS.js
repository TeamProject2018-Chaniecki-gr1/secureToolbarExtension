const checkHTTPS = (url) => {
    if (!tab.url.includes("https://") && tab.url.includes("www")) {
      createAlert();
    }
}