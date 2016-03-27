window.onload = function() {
  var addr = window.location.href.substring(window.location.href.length - 3, window.location.href.length);
  var url = "http://sphp-tylerbonnell.rhcloud.com/?redirect=" + addr;
  var ajax = new XMLHttpRequest();
  ajax.onload = function() {
    txt = this.responseText;
    if (txt == "invalid url") {
      window.location.href = "/";
    } else {
      window.location.href = txt;
    }
  };
  ajax.open("GET", url, true);
  ajax.send();
}