function somar () {
    var n1 = document.getElementById ("primeironumero").value;
    var n2 = document.getElementById ("segundonumero").value;
    var soma = parseInt (n1) + parseInt (n2);
    document.getElementById ("soma").innerHTML = soma;
}