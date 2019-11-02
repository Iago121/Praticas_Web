function calcular () {
var operacao = parseInt (prompt ("Informe o código da operação desejada: \n" +
                                     "[1] Área retangulo. \n" +
                                     "[2] Área triangulo. \n" +
                                     "[3] Área circulo. \n" +
                                     "[4] Área trapézio."));
 var n1 = parseInt (prompt ("Informe o primeiro número: "));
 var n2 = parseInt (prompt ("Informe o segundo número: "));
 var n5 = parseInt (prompt ("Informe a altura: "));
 var n3 = 2;
 var n4 = 3,14;
    switch (operacao) {
 case 1:
 document.getElementById ("app").innerHTML += (n1 + " * " + n2 + " = " + (n1 * n2));
 break;
 case 2:
document.getElementById ("app").innerHTML += (n1 + " * " + n2 + " / " + n3 + " = " + (n1 * n2 / n3));
 break;
 case 3:
 document.getElementById ("app").innerHTML += (n1 + " * " + n4 + " = " + (n1 * n4));
 break;
 case 4:
document.getElementById ("app").innerHTML (n1 + " + " + n2 + " * " + n5 + " = " + (n1 + n2 * n5));
 break;
 default:
 console.log ("Código inválido!!!")
 }
}