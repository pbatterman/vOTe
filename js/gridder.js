;(function($) {

    $.fn.Gridder = function(options) {

        var mybloc;
        var gridder = $('<div class="gridder-show"></div>');
        var animationSpeed = 600;
        var animationEasing = "linear";
        var visible = false;
        
        return this.each(function() {

            $('.gridder-list').click(function(e) {
                e.preventDefault();
                
                /* REMOVES PREVIOUS BLOC */
                $('.gridder-show').remove();

                /* ENSURES THE CORRECT BLOC IS ACTIVE */
                if (!$(this).hasClass('imactive')) {
                    $('.imactive').removeClass('imactive');
                    $(this).addClass("imactive");
                }
                
                /* ADD LOADING BLOC */
                mybloc = gridder.insertAfter(this);
                
                // TRYING THINGS
                var textFor = "";
                var textAg = "";
                var namesFor = ["Alex Harelick", "Mark Harding", "Paul Batterman", "Rocky Diegmiller", "Ale Garcia", "Cass Cedarholm", "Sylvester Tate"];
                for (i = 0; i < namesFor.length; i++) { 
                    textFor += namesFor[i] + "<br>";
                }

                var namesAg = [];
                for (i = 0; i < namesAg.length; i++) { 
                    textAg += namesAg[i] + "<br>";
                }

                /* EXPANDED OUTPUT */
                var currentcontent = $(this).find('.gridder-content').html();
                var currentname = $(this).find('.grid-name').html();
                htmlcontent = "<div class=\"nothing\">";
                htmlcontent += "<a class=gridder-close></a>";
                htmlcontent += "<div class = \"list\">";
                htmlcontent += "<h2 style=\"color:#33CC33; font-size:20px;\">Can advocate for " + currentname + "</h2>";
                htmlcontent += "<h5>" + textFor + "</h5>";
                htmlcontent += "</div>";

                htmlcontent += "<div class = \"list\">";
                htmlcontent += "<h2 style=\"color:#FF6656; font-size:20px;\">Cannot advocate for " + currentname + "</h2>";
                htmlcontent += "<h5>" + textAg + "</h5>";
                htmlcontent += "</div>";


                
                    // htmlcontent += "<div class=image>"+ currentimage+"</div>";
                    htmlcontent += "<div class=content>"+ currentcontent+"</div>";
                    htmlcontent += "</div>";

                    mybloc.html(htmlcontent);

                    if (!visible) {
                        mybloc.find('.padding').slideDown(animationSpeed, animationEasing, function() {
                            visible = true;
                        });
                    } else {
                        mybloc.find('.padding').fadeIn(animationSpeed, animationEasing, function() {
                            visible = true;
                        });
                    }

                    /* SCROLLS TO CORRECT BLOC */
                    $('html, body').animate({
                        scrollTop: $(this).position().top
                    }, 0);

                });

/* NEXT BUTTON */
$('.gridder').on('click', '.gridder-nav.next', function() {
    $(this).parents('.gridder-show').next().trigger('click');
});

/* PREVIOUS BUTTON */
$('.gridder').on('click', '.gridder-nav.prev', function() {
    $(this).parents('.gridder-show').prev().prev().trigger('click');
});

/* CLOSE BUTTON */
$('.gridder').on('click', '.gridder-close', function() {
    $('.imactive').removeClass('imactive');
    $('.gridder-show').remove();
});

});
};
})(jQuery);