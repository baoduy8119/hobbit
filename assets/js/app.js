$(function () {
    $(".vision-items .item").mouseover(function () {
        $(".vision-items .active-item").removeClass("active");
        $(this).find(".active-item").addClass("active");
    });
    $(".toggle-menu").on("click", function (e) {
        console.log(123);
        e.preventDefault();
        $(".nav-mobile").toggleClass("show");
        $("body").toggleClass("mobile-menu-open");
    });
    $(document).on("click", function (t) {
        console.log($(".btn-close").has(t.target).length);
        // (0 !== $("header").has(t.target).length && 1 !== $(".btn-close").has(t.target).length) || $(".nav-mobile").removeClass("show"); $("body").removeClass("mobile-menu-open");
        if ($("header").has(t.target).length === 0 || $(".btn-close").has(t.target).length === 1) {
            $(".nav-mobile").removeClass("show");
            $("body").removeClass("mobile-menu-open");
        }
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

    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function (event) {
        if ($(window).scrollTop() > 60) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
        
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $("header").removeClass('auto-show')
            $("header").addClass('auto-hide')
        } else {
            $("header").removeClass('auto-hide')
            $("header").addClass('auto-show')
        }
        prevScrollpos = currentScrollPos;
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
