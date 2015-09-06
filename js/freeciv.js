
$(function() {
  $("#download_box").click(function() {
  window.location="download.html";
  });
  $("#web_box").click(function() {
  window.location="https://play.freeciv.org";
  });
  $("#forum_box").click(function() {
  window.location="http://forum.freeciv.org";
  });
  $("#development_box").click(function() {
  window.location="http://freeciv.wikia.com/wiki/How_to_Contribute";
  });

  /* show download link based on the user's operating system */
  if (window.ui.os=="Windows") {
    $("#download_button").attr("href", "http://prdownloads.sourceforge.net/freeciv/Freeciv-2.5.1-win32-gtk2-setup.exe?download");
  } else if (window.ui.os=="Linux") {
    $("#download_button").attr("href", "http://prdownloads.sourceforge.net/freeciv/freeciv-2.5.1.tar.bz2?download");
  } else if (window.ui.os=="Mac OS X") {
    $("#download_button").attr("href", "http://freeciv.wikia.com/wiki/Install-MacOSX");
  } else {
    $("#download_button").attr("href", "download.html");
  }

});


