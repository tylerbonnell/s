window.onload = function() {
  $("input").onkeydown = shorten;
};

function shorten(e) {
  if (e.keyCode != 13) return;

  var inURL = $("input").value;
  inURL = inURL.replace(/https?:\/\//, "");
  if (!inURL.match(/.+\..+/)) return;
  
  $("shortened").innerHTML = inURL;
}

function $(el) {
  return document.getElementById(el);
}