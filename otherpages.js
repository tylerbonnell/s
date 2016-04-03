/*
  If a user loads a page that isn't explicitely defined,
  the html for 404.html is loaded. This js will parse
  the url and see if it is a valid redirect URL. If it
  is, then it redirects. Otherwise, it goes to the homepage.
*/

(function() {
  window.onload = function() {
    var addr = window.location.href.substring(window.location.href.length - 3, window.location.href.length);
    var url = "http://sphp-tylerbonnell.rhcloud.com/?redirect=" + addr;
    var ajax = new XMLHttpRequest();
    ajax.onload = function() {
      txt = this.responseText;
      console.log(txt);
      if (txt == "invalid url") {
        window.location.href = "http://bonn.pw/s/";
      } else {
        window.location.href = txt;
      }
    };
    ajax.open("GET", url, true);
    ajax.send();
  }
}());