//var getDomain = window.location.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
//console.log(getDomain);

//google
if(getDomain === "google") {
  jQuery("#ads").css("border", "1px solid red");
  jQuery("#search h3.r").each(function(i) {

    a = jQuery(this).find('a');
    href = jQuery(a).attr('href');

    jQuery(a).css({'color': '#F00'});


    jQuery(this).append("<div class='ot-ff-ext ot-res ot-ff-loading'></div>");
    res = srvGet(href, function(data) {

    });
    console.log(href);

  })
} else if (getDomain === "duckduckgo.org"){
  jQuery("#ads").css("border", "1px solid red");
  jQuery("#links div.result").each(function(i) {

    a = jQuery(this).find('a.result__url');
    href = jQuery(a).attr('href');

    jQuery(a).css({'color': '#F00'});


    jQuery(this).find(".result__title").append("<div class='ot-ff-ext ot-res ot-ff-loading'></div>");
    res = srvGet(href, function(data) {

    });
    console.log(href);

  })
}




function lookupLinks() {


  /*
  var target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  console.log("content script sending message");
  chrome.runtime.sendMessage({"url": target.href});
  */
}
