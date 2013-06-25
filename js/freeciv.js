/* Freeciv.org website Javascript functions. */

function init_i18n () 
{
  for (translation_key in jQuery.i18n.map) {
    $("#" + translation_key).html(jQuery.i18n.map[translation_key]);
  }

  $("#download_button").mouseover(function() {
    $('#intro_text').html(download_tooltip + window.ui.os);
    $('.btn-large').removeClass("btn-success");
    $('#download_button').addClass("btn-success");
  });
  $("#multiplayer_button").mouseover(function() {
    $('#intro_text').html(meta_tooltip);
    $('.btn-large').removeClass("btn-success");
    $('#multiplayer_button').addClass("btn-success");
  });
  $("#wiki_button").mouseover(function() {
    $('#intro_text').html(wiki_tooltip);
    $('.btn-large').removeClass("btn-success");
    $('#wiki_button').addClass("btn-success");
  });
  $("#playonline_button").mouseover(function() {
    $('#intro_text').html(freeciv_web_tooltip);
    $('.btn-large').removeClass("btn-success");
    $('#playonline_button').addClass("btn-success");
  });
  $("#freeciv_splash").attr("src", "img/freeciv-ingame-screenshot.png");
  $("#footer_image").attr("src", "img/freeciv-splash.png");

}


function main_page_links_show()
{

  /* show download link based on the user's operating system */
  if (window.ui.os=="Windows") {
    $("#download_button").attr("href", "http://prdownloads.sourceforge.net/freeciv/Freeciv-2.3.4-win32-gtk2-setup.exe?download");
  } else if (window.ui.os=="Linux") {
    $("#download_button").attr("href", "http://prdownloads.sourceforge.net/freeciv/freeciv-2.3.4.tar.bz2?download");
  } else if (window.ui.os=="Mac OS X") {
    $("#download_button").attr("href", "http://prdownloads.sourceforge.net/freeciv/freeciv-2.3.0-lion-gtk2.dmg?download");
  } else {
    $("#download_button").attr("href", "http://freeciv.wikia.com/wiki/Download");
  }


}

function show_metaserver() 
{
  $("#main_content").html("<iframe src='http://meta.freeciv.org' "
      + "width='100%' height='1500' frameborder='0'></iframe>");
  $(".row-fluid").hide();
  $("#documentation_heading").hide();
  $("hr").hide();
}

/* Called on startup */
$(".multi_button").click(show_metaserver);
main_page_links_show();

jQuery.i18n.properties({
    name:'Messages', 
    path:'languages/', 
    mode:'both',
    callback: init_i18n});

