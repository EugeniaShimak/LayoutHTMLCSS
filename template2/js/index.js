$(function () {
    let header = $('#header'), scroll = $(window).scrollTop(), nav = $("#nav");



    fixHeader(scroll);
    $(window).on("scroll resize", function () {
        scroll = $(this).scrollTop();
        fixHeader(scroll);
    });
    function fixHeader(scroll) {
        if (scroll >= $("#intro").innerHeight()) {
            header.addClass("fixed")
        }
        else {
            header.removeClass("fixed")
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let _this=$(this),elementId =_this.data("scroll"),
            sectionToScroll = $(elementId),
            positionSection = sectionToScroll.offset().top;
        setActiveNav(_this);
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop:positionSection
        },1000)
    });

    function setActiveNav(activeNav){
        $("#nav a").removeClass("active");
        activeNav.addClass("active");
    }


    $("#nav__toggle").on("click",function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});