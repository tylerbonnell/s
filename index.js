(function() {
  window.onload = function() {
    $("input").onkeydown = shorten;
    $("shorten").onmouseup = getFromServer;
  };

  // user can hit enter instead of clicking
  function shorten(e) {
    if (e.keyCode == 13) {
      getFromServer();
    }
  }

  // Query the php backend with the currently entered URL as a parameter
  function getFromServer() {
    $("shortened").innerHTML = "";
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
}());