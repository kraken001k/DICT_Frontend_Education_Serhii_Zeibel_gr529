$(function () {
    console.log("Сайт кафедри завантажено успішно!");

    // Бургер-меню
    $('.menu-toggle').on('click', function () {
        $('.main-menu').toggleClass('show');
    });

    // Перемикач мови
    $('.lang-wrapper a').on('click', function (e) {
        e.preventDefault();
        $('.lang-wrapper a').removeClass('is-active');
        $(this).addClass('is-active');
    });

    // Slick Slider для новин
    const $slickElement = $('#news .news-cards');

    $slickElement.not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'ease-in-out',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992,  settings: { slidesToShow: 2 } },
            { breakpoint: 576,  settings: { slidesToShow: 1 } }
        ]
    });
});
