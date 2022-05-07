jQuery(document).ready(function ($) {
    var star = "<span class='star'>•</span>";
    var numStars = 100;
    for (var x = 1; x <= numStars; x++) {
        var randomDelay = Math.random() * 10;
        $(star)
            .css("animation-delay", randomDelay + "s")
            .appendTo("body");
    }
    // get window dimensions
    var ww = $(window).width();
    var wh = $(window).height();
    $(".star").each(function (i) {
        var posx = Math.round(Math.random() * ww) - 20;
        var posy = Math.round(Math.random() * wh) - 20;
        $(this)
            .css("top", posy + "px")
            .css("left", posx + "px");
    });
});