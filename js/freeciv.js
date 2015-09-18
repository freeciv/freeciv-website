var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


var page = getUrlParameter('page');

if (page == "download" || page == "donate") {
  $.ajax({
    url: page + ".html",
    cache: true,
    async: false
  })
  .done(function(doc) {
    $( "#content" ).html(doc);
  });

}


$(function() {
  $(".container").show();

  $("#download_box").click(function() {
  window.location="?page=download";
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
    $("#download_button").attr("href", "?page=download");
  }

});


