var letters = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-_";

window.onload = function() {
  $("input").onkeydown = shorten;
};

function shorten(e) {
  if (e.keyCode != 13) return;

  getFromServer($("input").value);
}

function getFromServer(inURL) {
  var url = "https://sphp-tylerbonnell.rhcloud.com/?url=" + encodeURIComponent(inURL);
  var ajax = new XMLHttpRequest();
  ajax.onload = function() {
    $("shortened").innerHTML = this.responseText;
  };
  ajax.open("GET", url, true);
  ajax.send();
}

function $(el) {
  return document.getElementById(el);
}