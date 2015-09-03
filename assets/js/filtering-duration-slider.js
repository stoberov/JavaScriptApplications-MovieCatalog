$(function () {
    $("#slider-duration").slider({
        min: 0,
        max: 210,
        value: 90,
        slide: function (event, ui) {
            $(".duration").val(ui.value);
        }
    });
});