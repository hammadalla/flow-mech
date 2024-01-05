let sectionTop = $(".text-layer").offset().top;

$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > sectionTop) {
        $(".navbar").addClass("bg-color");
        $(".nav-link").addClass("nav-color");
        $(".nav-link").addClass("link-color");
        $(".nav-link").removeClass("link-hover");
        $(".logo").attr("src", "images/Logoflowmech.png");
    } else {
        $(".navbar").removeClass("bg-color");
        $(".nav-link").removeClass("nav-color");
        $(".nav-link").removeClass("link-color");
        $(".nav-link").addClass("link-hover");
        $(".logo").attr("src", "images/Logoflowmech-wihte.png");
    }
});




$(window).on('load', function() {
    $(".loading").fadeOut(2000);
});




$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        touchDrag: true,
        margin: 10,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }

        },
    })
  });