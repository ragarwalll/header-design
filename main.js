$(".menu-border").click(function(){
    $(".hamburger").toggleClass("open")
    $(".menu-toggle-hidden").toggleClass("open")
    $(".header-container").toggleClass("fade-in")
    $(".header").toggleClass("fade-in")
})

$(".main-search").click(function(){
    $(".main-search").addClass("search-bottom")
})
$(document).on("click", function(e) {
    if ($(e.target).is(".main-search") === false){
        $(".main-search").removeClass("search-bottom")
}})
