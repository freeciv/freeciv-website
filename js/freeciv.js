

$(function() {
  $("#download_box").click(function() {
  window.location="download.html";
  });
  $("#web_box").click(function() {
  window.location="https://play.freeciv.org/";
  });
  $("#forum_box").click(function() {
  window.location="http://forum.freeciv.org/";
  });
  $("#development_box").click(function() {
  window.location="http://www.freeciv.org/wiki/How_to_Contribute";
  });

  /* show download link based on the user's operating system */
  /* FIXME: commented out until we can arrange that the displayed version
   * number is correct even when e.g. the Windows package is not yet
   * up to date. Would also be good to identify the platform we've guessed
   * to the user and provide a backup link to download.html in the same
   * place.
  
  if (window.ui.os=="Windows") {
    $("#download_button").attr("href", "http://prdownloads.sourceforge.net/freeciv/Freeciv-2.5.6-win32-gtk2-setup.exe?download");
  } else if (window.ui.os=="Linux") {
    $("#download_button").attr("href", "http://prdownloads.sourceforge.net/freeciv/freeciv-2.5.6.tar.bz2?download");
  } else if (window.ui.os=="Mac OS X") {
    $("#download_button").attr("href", "http://www.freeciv.org/wiki/Install-MacOSX");
  } else {
    $("#download_button").attr("href", "download.html");
  }

   * end of FIXME */

});

$( window ).resize(function() {
  $("#mysearchform").get(0).scrollIntoView();
});

