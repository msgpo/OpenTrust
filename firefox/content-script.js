/*
If the click was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyExtension(e) {
  var target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  console.log("content script sending message");
  chrome.runtime.sendMessage({"url": target.href});
}

function srvGet(url) {

  urie = encodeURIComponent(url);
  console.log('Looking '+urie);

  jQuery.get('http://192.168.1.131:5555/OpenTrust_ext/', {uri: urie}, function(data) {
    console.log(data);
    return data;
  });
}

/*
Add notifyExtension() as a listener to click events.
*/
window.addEventListener("click", notifyExtension);
window.addEventListener("load", lookupLinks);
