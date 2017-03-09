$(function() {
    $('.jcarousel').jcarousel({
    });
    $('select').niceSelect();
    $(".cb-enable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-disable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', true);
    });
    $(".cb-disable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-enable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', false);
    });



    $('.menu__li').hover(function(){
    	$(this).children('.menu__sub').animate({
    		opacity: 'show',
    	}, 300);
    	$(this).stop();
    },

    function(){
    	$(this).children('.menu__sub').stop().animate({
    		opacity: 'hide'
    	}, 10);
    })
});