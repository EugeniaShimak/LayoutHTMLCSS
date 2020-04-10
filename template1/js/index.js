$(function () {
    let header = $("#header"), introHeight = $("#intro").innerHeight(),
        scroll = $(window).scrollTop();
    checkScroll(scroll);

    $(window).on("scroll", function () {
        scroll = $(this).scrollTop();
        checkScroll(scroll);
    });

    function checkScroll(scroll) {
        if (scroll >= introHeight) {
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
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })


    $("[data-collapse]").on("click",function (event) {
        event.preventDefault();

        let _this = $(this), blockId = _this.data("collapse");
        _this.toggleClass("active");
    })


    $("[data-slider]").slick({
        infinite:true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

});