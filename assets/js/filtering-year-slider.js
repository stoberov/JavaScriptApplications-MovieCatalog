$(function () {
    $("#slider").slider({
        min: 1900,
        max: 2015,
        value: 1950,
        slide: function (event, ui) {
            $(".year").val(ui.value);
        }
    });
});