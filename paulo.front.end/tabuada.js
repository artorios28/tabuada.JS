/*let numero= 8;
for(let i=1;i<=100;i++){
    let resultado = numero*i;
    console.log(numero+ "x " +i+" = " +resultado);
}
    */
let botao = document.getElementById("btn-calcular")
botao.addEventListener("click",calcularTabuada);
function calcularTabuada(){
    let input = document.getElementById("numero").value;
    let divResultado = document.getElementById("resultado");
    let numero = parseInt(input);
    // calculo da tabuada
    let resultado = "";
    for(let i=1;i<=10;i++){
resultado = numero+" x "+i+" = "+(numero*i)+"\n";
console.log(resultado);
divResultado.innerText += resultado; 
 }
}