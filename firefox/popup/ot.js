/*
Get current tab */
chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    var url = tabs[0].url;
    //console.log(tabs);
    document.getElementById('url').innerHTML = url;
    srvGet(url);
});
