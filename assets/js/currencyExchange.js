(function () {
    $("#dollar, #lev").on("click", function () {
        setCurrencySystem(this.id);
        updateCurrency();
    });

    getCurrencySystem();
    updateCurrency();

    //getAndDisplayWeather();
}());

function setCurrencySystem(newCurrency) {
    localStorage.setItem("currency-system", newCurrency);
    $(".active").removeClass("active");
    $("#" + newCurrency).addClass("active");
}

function getCurrencySystem() {
    var system = localStorage.getItem("currency-system");

    // if system is unset or invalid, then determine it automatically
    if (system != "lev" && system != "dollar") {
        system = window.navigator.language == "en-US" ? "dollar" : "lev";
    }

    setCurrencySystem(system);
    return system;
}

function updateCurrency() {
    var selectedCurrency = getCurrencySystem(),
        originalPrice = $('.product-price').each(function () {
                var originalPrice = $(this).text().match(/\d+/);

                if (selectedCurrency == "dollar") {
                    $(this).append('$');
                } else {
                    $(this).text(2 * originalPrice);
                    $(this).append('EUR');
                }
            }
        );

}

//function localizeTemperature(lev) {
//    lev = Math.round(lev);
//    if (getCurrencySystem() == "dollar") {
//        return (lev * 9 / 5 + 32).toFixed(1) + "&deg;F";
//    } else {
//        return lev.toFixed(1) + "&deg;C";
//    }
//}
//
//function queryRemote(type, lat, lng, onSuccess) {
//    $.ajax({
//        url: "http://api.openweathermap.org/data/2.5/" + type + "?lat=" + lat + "&lon=" + lng + "&units=lev",
//        type: "GET",
//        cache: false,
//        dataType: "text",
//        success: function (data) {
//            // the API returns data as JSON
//            localStorage.setItem("cache-" + type, data);
//            (onSuccess || $.noop)();
//        },
//        error: function (errorData) {
//            $("#weather").html("Error retrieving weather or forecast: " + errorData.status);
//        }
//    });
//}
//
//function getLocation(onSuccess, onError) {
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(onSuccess || $.noop, onError || $.noop);
//    } else {
//        $("#weather").html("Geolocation is not supported by this browser.");
//    }
//}
//
//function getWeather(onComplete) {
//    getLocation(function (position) {
//        var lat = position.coords.latitude;
//        var lng = position.coords.longitude;
//        queryRemote("weather", lat, lng, function () {
//            queryRemote("forecast/daily", lat, lng, onComplete || $.noop);
//        });
//    });
//}
//
//function renderFromCache() {
//    var data, forecast;
//    try {
//        data = JSON.parse(localStorage.getItem("cache-weather"));
//        forecast = JSON.parse(localStorage.getItem("cache-forecast/daily"));
//    } catch (exception) {
//        if (window.console) {
//            console.error(exception);
//        }
//        return;
//    }
//
//    var backgroundSrc = "https://raw.githubusercontent.com/meskarune/mylocalweather/gh-pages/assets/backgrounds/" + data.weather[0].icon + ".jpg";
//    var foregroundSrc = "https://raw.githubusercontent.com/meskarune/mylocalweather/gh-pages/assets/icons/" + data.weather[0].icon + ".png";
//    var temperature = localizeTemperature(data.main.temp);
//    var description = data.weather[0].description;
//
//    var dailyHigh = localizeTemperature(forecast.list[0].temp.max);
//    var dailyLow = localizeTemperature(forecast.list[0].temp.min);
//
//    $("#weather").empty()
//        .append("<h2>" + data.name + "</h2>")
//        .append("<img class='icon' src='" + foregroundSrc + "' />")
//        .append("<span id='temp'>" + temperature + "</span>")
//        .append("<p id='description'>" + data.weather[0].description + "</p>")
//        .append("<p><span id='humidity'>" + data.main.humidity + "% humid</span>" +
//        "<span id='wind-speed'>" + windSpeed + "</span></p>");
//    $("#forecast").empty()
//        .append("<p id='daily'>Today's Forecast: " + forecast.list[0].weather[0].main + "</p>")
//        .append("<p><span id='high'>High: " + dailyHigh + "</span>" +
//        "<span id='low'>Low: " + dailyLow + "</span></p>");
//}
//
//function getAndDisplayWeather() {
//    var now = Math.round(Date.now() / 1000);
//    if (localStorage.getItem("timestamp") && localStorage.getItem("timestamp") <= now - 1800) {
//        renderFromCache();
//    } else {
//        getWeather(function () {
//            localStorage.setItem("timestamp", now);
//            renderFromCache();
//        });
//    }
//}
//
//$(function () {
//    $("#dollar, #lev").on("click", function () {
//        setCurrencySystem(this.id);
//        renderFromCache();
//    });
//
//    getCurrencySystem();
//    getAndDisplayWeather();
//});