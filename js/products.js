$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
        {
            breakpoint: 1024, // Desktop size
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 880, // Tablet size
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 767, // Mobile size
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });
});
