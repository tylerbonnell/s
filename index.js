var letters = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-_";

window.onload = function() {
  $("input").onkeydown = shorten;
  $("shorten").onmouseup = getFromServer;
};

function shorten(e) {
  if (e.keyCode != 13) return;
  getFromServer();
}

function getFromServer() {
  var url = "http://sphp-tylerbonnell.rhcloud.com/?url=" + encodeURIComponent($("input").value);
  var ajax = new XMLHttpRequest();
  ajax.onload = function() {
    $("shortened").style.display = "";
    $("shortened").innerHTML = this.responseText;
  };
  ajax.open("GET", url, true);
  ajax.send();
}

function $(el) {
  return document.getElementById(el);
}