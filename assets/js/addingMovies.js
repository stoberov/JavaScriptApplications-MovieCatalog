var $body = $('body');
var $container = $('.main-content');
var $wrapper = $('#disabled');

$body.on('click', '#addBtn', function(){
    var $this = $(this);
    $container.addClass('blurred');
    $wrapper.addClass('disabled-background');
    $('#addMovieMenu').show('scale');
});
$('#cancel').on('click', function(){
    $('#addMovieMenu').hide();
    $container.removeClass('blurred');
    $wrapper.removeClass('disabled-background');
});