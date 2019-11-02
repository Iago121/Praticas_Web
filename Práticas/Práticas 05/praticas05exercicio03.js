function somar () {
    var n1 = document.getElementById ("numeros").value;
    if (n1 % 2 == 0) {
        document.getElementById ("jogo").innerHTML = "Par!!!";}
    else{
        document.getElementById ("jogo").innerHTML = "Impar!!!";}
}