'use strict';
var ext = {
  v: 0.1,
  url: "http://192.168.1.131:5555/OpenTrust_ext/",
}
/*global chrome:false */

chrome.browserAction.setBadgeText({text: '0'});
chrome.browserAction.setBadgeBackgroundColor({color: '#0f0'});

chrome.browserAction.onClicked.addListener(function(aTab) {
  //chrome.tabs.create({'url': 'http://chilloutandwatchsomecatgifs.com/', 'active': true});
});

/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function notify(message) {
  console.log("background script received message");
  var title = chrome.i18n.getMessage("notificationTitle");
  var content = chrome.i18n.getMessage("notificationContent", message.url);
  /*chrome.notifications.create({
    "type": "basic",
    "iconUrl": chrome.extension.getURL("icons/link-48.png"),
    "title": title,
    "message": content
  });*/
  console.log("lnk click");
}

console.log("background loaded");





/*
Assign `notify()` as a listener to messages from the content script.
*/
chrome.runtime.onMessage.addListener(notify);
