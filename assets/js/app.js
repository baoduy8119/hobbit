$(function () {
    $(".vision-items .item").mouseover(function () {
        $(".vision-items .active-item").removeClass("active");
        $(this).find(".active-item").addClass("active");
    });
    $(".toggle-menu").on("click", function (e) {
        console.log(123);
        e.preventDefault();
        $(".nav-mobile").toggleClass("show");
    });
    $(document).on("click", function (t) {
        (0 !== $("header").has(t.target).length && 1 !== $(".btn-close").has(t.target).length) || $(".nav-mobile").removeClass("show");
    });
    $("header a").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    $(window).scroll(function (event) {
        if ($(window).scrollTop() > 60) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });

    $(".business-slide").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
    });

    AOS.init();
});
