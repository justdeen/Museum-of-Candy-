// SCRIPT FOR APPLYING BACKGROUND COLOR TO NAVBAR
$(function () {
    $(document).scroll(function(){
        var $nav = $("#nav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

// SCRIPT FOR CLEARING THE HASH IN URL
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }