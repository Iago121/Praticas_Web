function logo () {
    var n1 = parseInt (document.getElementById ("primeironumero").value);
    var n2 = parseInt (document.getElementById ("segundonumero").value);
    var divisao = Math.log (n1) / Math.log (n2);
    document.getElementById ("soma").innerHTML += divisao;
}