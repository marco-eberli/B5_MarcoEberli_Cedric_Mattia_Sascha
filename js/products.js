$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 200,
        focusOnSelected: true,
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
