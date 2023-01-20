$(document).ready(function() {
    $('.partners-block__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: "<img src='i/icons/arrow-prev-black.svg' class='arrow-black prev3' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next-black.svg' class='arrow-black next3' alt='2'>",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
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
    $('.slider-banner ').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: "<img src='i/icons/arrow-prev.svg' class='arrow prev2' alt='1'>",
        nextArrow: "<img src='i/icons/arrow-next.svg' class='arrow next2' alt='2'>",
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