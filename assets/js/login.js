$(window).load(function() {
    var initialDivHtml = $('#logField').html();

    $('#logButton').click(function() {
        var el = new Everlive({
            apiKey: "89fOd5pfDetlgKWY",
            scheme: "https",
            authentication: {
                persist: true,
                onAuthenticationRequired: function() {
                    console.log('Your access token has expired. Please log in.');
                    // Redirect to log-in page
                }
            }
        });

        var username = $('#username').val();
        var password = $('#password').val();

        el.authentication.login(username, password, function(data) {
            var accessToken = data.result.access_token;
            console.log("Received access token: " + accessToken);
            //var now = new Date();
            //var exdays = 1;
            //now.setTime(now.getTime() + (exdays*24*60*60*1000));
            //var expires = "expires=" + now.toUTCString();
            //document.cookie = 'name=' + username + '; ' + expires;

            $('#logField').empty();

            var loggedUsername = $('<a />')
                .attr('href', '#')
                .attr('id', 'loggedUsername')
                .text(username);
            var logOut = $('<a />').attr('id', 'logOut').attr('href', '').text('Logout');
            var logged = $('<div />')
                .attr('id', 'logged')
                .append('<span>Hi, </span>')
                .append(loggedUsername)
                .append('<span>!</span>&nbsp&nbsp&nbsp')
                .append(logOut);

            $('#logField').html(logged);
        }, function(err) {
            console.log("Unfortunately an error occurred: " + err.message);

            var error = $('<p />')
                .attr('id', 'errorField')
                .text('Invalid username or password!')
                .css({
                    "background-color": "#CEFF47",
                    "font-weight": "bold",
                    "position": "fixed",
                    "top": "100px",
                    "left": "40%",
                    "text-align": "center",
                    "border": "2px solid #2D8416",
                    "border-radius": "0 0 10px 10px",
                    "padding": "15px"
                });
            var errorContainer = $('<div />').attr('id', 'errorContainer').append(error);


            $('.main-content').append(errorContainer.show(500).hide(4000));
        });
    });

    $('#logOut').click(function() {
        var everLive = new Everlive({
            apiKey: "89fOd5pfDetlgKWY",
            scheme: "https"
        });


            everLive.authentication.logout(function() {
                console.log("Logout successful!");
                $('#logField').html(initialDivHtml);
            }, function(err) {
                alert("Failed to logout: " + err.message);
            });
    });



    //var ev = new Everlive({
    //    apiKey: "89fOd5pfDetlgKWY",
    //    scheme: "https",
    //    authentication: {
    //        persist: true
    //    }
    //});
    //
    //ev.Users.currentUser(function(data) {
    //    if (data.result) {
    //        var username = data.result.Username;
    //        //alert(username + " is logged in!");
    //        $('#logField').empty();
    //
    //        var loggedUsername = $('<a />')
    //            .attr('href', '#')
    //            .attr('id', 'loggedUsername')
    //            .text(username);
    //        var logOut = $('<a />').attr('id', 'logOut').attr('href', '').text('Logout');
    //        var logged = $('<div />')
    //            .attr('id', 'logged')
    //            .append('<span>Hi, </span>')
    //            .append(loggedUsername)
    //            .append('<span>!</span>&nbsp&nbsp&nbsp')
    //            .append(logOut);
    //
    //        $('#logField').html(logged);
    //    } else {
    //        //alert("Missing access token. Please log in!");
    //        $('#logField').html(initialDivHtml);
    //    }
    //}, function(err) {
    //    alert(err.message + " Please log in.");
    //});
});
