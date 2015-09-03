$(window).load(function() {
    var jsonfile = require(['bower_components/jsonfile/index.js']);


    var $body = $('body');
    var $container = $('.main-content');
    var $wrapper = $('#disabled');

    $body.on('click', '#addBtn', function () {
        $container.addClass('blurred');
        $wrapper.addClass('disabled-background');
        $('#addMovieMenu').show('clip');
    });

    $('#cancel').on('click', function () {
        $('#addMovieMenu').hide('clip');
        $container.removeClass('blurred');
        $wrapper.removeClass('disabled-background');
    });

    $('#add').on('click', function () {
        var title = $('#title').val();
        var price = $('#price').val();
        var country = $('#country').val();
        var year = $('#year').val();
        var genre = $('#genre').val();
        var duration = $('#duration').val();
        var summary= $('#summary').val();
        var rating = $('#rating').val();

        var el = new Everlive('iCUPUElKASGpeqyh');
        var productsData = el.data('Products');
        var product = {
            'Title': title,
            'Price': price,
            'Specs': {'Country': country, 'Year': year, 'Genre': genre, 'Duration': duration},
            'Summary': summary,
            'Rating': rating
        };
        productsData.create(product)
            .then(function (data) {
                var id = data.result.Id;
                var query = new Everlive.Query();
                query.where().eq('Id', id).done().select('Title', 'Price', 'Specs', 'Summary', 'Rating');
                productsData.get(query)
                    .then(function (products) {
                        var newMovie = products.result[0];
                        //console.log(JSON.stringify(newMovie));
                        var file = 'products.json';

                        jsonfile.writeFile(file, newMovie, function (err) {
                            console.error(err)
                        })
                        //$.getJSON('products.json', function (data) {
                        //    var updatedProducts = data.push(newMovie);
                        //    sessionStorage.setItem('products', JSON.stringify(newMovie));
                        //    var retrievedData = sessionStorage.getItem("products");
                        //    console.log(retrievedData);
                        //
                        //    //var retrievedData = sessionStorage.getItem("products");
                        //    //var obj = $.parseJSON(retrievedData);
                        //    //for(var i=1; i < obj.length; i+=1) {
                        //    //    console.log(obj[i]);
                        //    //};
                        //
                        //});
                    })
                    .then(function () {
                        $('#addMovieMenu').hide('clip');
                        $container.removeClass('blurred');
                        $wrapper.removeClass('disabled-background');
                    })
            });
    });
});