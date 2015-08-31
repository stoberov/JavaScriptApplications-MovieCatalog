$(window).load(function() {
    $('button').click(function() {
        var el = new Everlive({
            apiKey: "89fOd5pfDetlgKWY",
            scheme: "https"
        });

        var username = $('#username').val();
        var password = $('#password').val();

        el.authentication.login(username, password, function(data) {
            var accessToken = data.result.access_token;
            alert("Successfully logged the user in! Received access token: " + accessToken);
        }, function(err) {
            alert("Unfortunately an error occurred: " + err.message);
        });
    });
});
