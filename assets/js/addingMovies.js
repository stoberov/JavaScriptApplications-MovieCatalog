$(window).load(function() {

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
        var $title = $('#title').val();
        var $price = $('#price').val();
        var $country = $('#country').val();
        var $year = $('#year').val();
        var $genre = $('#genre').val();
        var $duration = $('#duration').val();
        var $summary= $('#summary').val();
        var $rating = $('#rating').val();

        var el = new Everlive('iCUPUElKASGpeqyh');
        var productsData = el.data('Products');
        var product = {
            'Title': $title,
            'Price': $price,
            'Specs': {'Country': $country, 'Year': $year, 'Genre': $genre, 'Duration': $duration},
            'Summary': $summary,
            'Rating': $rating
        };
        productsData.create(product)
            .then(function (data) {
                var id = data.result.Id;
                var query = new Everlive.Query();
                query.where().eq('Id', id).done().select('Title', 'Price', 'Specs', 'Summary', 'Rating');
                productsData.get(query)
                    .then(function (products) {
                        var newMovie = products.result[0];
                        console.log(JSON.stringify(newMovie));
                        $.getJSON('products.json', function (data) {

                            data.push(newMovie);
                        });
                    })
                    .then(function () {
                        $('#addMovieMenu').hide('clip');
                        $container.removeClass('blurred');
                        $wrapper.removeClass('disabled-background');
                    })
            });
        //function(error){
        //    alert(JSON.stringify(error));
        //});
    });
});