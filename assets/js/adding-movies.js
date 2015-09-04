$(window).load(function() {

    var $body = $('body');
    var $container = $('.main-content');
    var $wrapper = $('#disabled');

    $body.on('click', '#addBtn', function() {
        $container.addClass('blurred');
        $wrapper.addClass('disabled-background');
        $('#addMovieMenu').show('clip');
    });

    $('#cancel').on('click', function() {
        $('#addMovieMenu').hide('clip');
        $container.removeClass('blurred');
        $wrapper.removeClass('disabled-background');
    });

    $('#add').on('click', function() {
        var $title = $('#title').val();
        var $price = $('#price').val();
        var $country = $('#country').val();
        var $year = $('#year').val();
        var $genre = $('#genre').val();
        var $duration = $('#duration').val();
        var $summary = $('#summary').val();
        var $rating = $('#rating').val();
        var $smallImage = $('#smallImage').val();
        var $largeImage = $('#largeImage').val();

        var el = new Everlive('aHvavzXSbq2nV39K');
        var productsData = el.data('Products');
        var product = {
            'Title': $title,
            'Price': $price,
            'Country': $country,
            'Year': $year,
            'Genre': $genre,
            'Duration': $duration,
            'Summary': $summary,
            'Rating': $rating,
            'ImageUrlSmall': $smallImage,
            'ImageUrlBig': $largeImage
        };
        productsData.create(product)
            .then(function() {
                /*$('#addMovieMenu').hide('clip');
                $container.removeClass('blurred');
                $wrapper.removeClass('disabled-background');*/
                location.reload();
            });
    });
});
