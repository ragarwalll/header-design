$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if(scroll > 80){
        $(".fig").addClass("header-reveal");
    }
    if(scroll < 100){
        $(".fig").removeClass("header-reveal");
    }
});