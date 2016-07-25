(function() {
    var tbody = document.getElementById('price_list');

    function updatePrice(event) {
        var tr = event.srcElement.parentElement.parentElement;
        var unitPrice = parseInt(tr.children[1].innerHTML);
        var number = parseInt(tr.getElementsByTagName('input')[0].value);
        tr.children[3].innerHTML = unitPrice * number;
    }

    if (tbody !== null) {
        var inputTags = tbody.getElementsByTagName('input');
        for (var i = 0; i < inputTags.length; i++) {
            inputTags[i].addEventListener('change', updatePrice);
            inputTags[i].addEventListener('keyup', updatePrice);
        }
    }
})();
