(function () {
    (document).ready(function () {
        $('#dollar, #lev').on('click', function () {
            setCurrencySystem(this.id);
            updateCurrency();
        });
    }());

    function setCurrencySystem(newCurrency) {
        localStorage.setItem("currency-system", newCurrency);
    }

    function getCurrencySystem() {
        var system = localStorage.getItem("currency-system");

        // if system is unset or invalid, then use dollar by default
        if (system != "lev" && system != "dollar") {
            system = "dollar";
        }

        setCurrencySystem(system);

        return system;
    }

    function updateCurrency() {

        var selectedCurrency = getCurrencySystem();

        $.getJSON("http://rate-exchange-1.appspot.com/currency?from=USD&to=BGN&callback=?", function (result) {
            $('.price').each(function () {
                    var currentPrice = $(this),
                        newPrice;

                    if (selectedCurrency == 'dollar') {
                        $('.currency').text('$');
                    } else {
                        $('.currency').text('BGN');
                        newPrice = (currentPrice.text() * result.rate).toFixed(2);
                        currentPrice.text(newPrice);
                    }
                }
            );
        });
    }
}());
