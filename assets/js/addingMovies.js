var $body = $('body');
var $container = $('.main-content');

$body.on('click', '#addBtn', function(){
    var $this = $(this);
    $container.addClass('blurred');
    $('#addMovieMenu').show('scale');
});
$('.main-content').on('click', function(){
    $('#addMovieMenu').hide();
    $container.removeClass('blurred');
});