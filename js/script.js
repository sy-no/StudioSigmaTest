$(document).ready(function () {
    $(".content ol ul").hide();

    $(".content ol li").click(function (e) {
        $(this).children("ul").toggle(
        { left: 200 }, {
            duration: 'slow',
            easing: 'linear'
        })

        e.stopPropagation();
    });
});

