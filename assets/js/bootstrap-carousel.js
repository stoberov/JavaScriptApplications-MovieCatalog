$(function () {
    $('.carousel').carousel({
        interval: 3000
    }).carousel('pause');

    $.getJSON("products.json", function(data) {
        var products = data;

        generateAllProductsHTML(products);
        $(window).trigger('hashchange');
    });

    function generateAllProductsHTML(data) {
        var list = $('.carousel-inner'),
            theTemplateScript = $("#my-template").html(),
            theTemplate = Handlebars.compile(theTemplateScript);

        list.append(theTemplate(data));
        list.find('li > button').on('click', function(e) {
            var productIndex;

            e.preventDefault();
            productIndex = $(this).parent().data('index');
            window.location.hash = 'product/' + productIndex;
        })
    }
}());