function somar () {
    var n1 = 0;
    var n2 = parseInt (document.getElementById ("unico").value);
    while (n1 <= n2) {
        if (n1 % 2 == 0)
         document.getElementById ("soma").innerHTML += n1 + "<br>";
        n1++;
    }
}