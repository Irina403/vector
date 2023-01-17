$(document).ready(function() {
    $('.reviews__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<img src='i/icons/arrow-prev2.svg' class='prev' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next2.svg' class='next' alt='2'>",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    // arrows: false,
                    infinite: true,
                    dots: true
                }
            }

        ]
    });
    $('.slider-work').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<img src='i/icons/arrow-prev2.svg' class='prev prev2' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next2.svg' class='next next2' alt='2'>",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    // arrows: false,
                    infinite: true,
                    dots: true
                }
            }

        ]
    });




});