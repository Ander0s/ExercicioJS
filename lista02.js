/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma
indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
 */
function calculoImc(peso,altura) {
    IMC = peso/(altura*altura);
    return IMC;
}
const seuIMC=calculoImc(92,1.5);
if (seuIMC<18.5) {
    console.log('Voce esta abaixo do peso, seu IMC:',seuIMC,', o IMC ideal e entre 18.5 e 25');  
}else if (18.5<seuIMC && seuIMC<25){
    console.log('Voce no peso ideal, seu IMC:',seuIMC);
}else if (25<seuIMC && seuIMC<30){
    console.log('Voce esta acima do peso, seu IMC:',seuIMC,', o IMC ideal e entre 18.5 e 25');
}else if (30<seuIMC && seuIMC<40){
    console.log('Voce esta obeso, seu IMC:',seuIMC,', o IMC ideal e entre 18.5 e 25');
}else{
    console.log('Voce esta com obesidade grave, seu IMC:',seuIMC,', o IMC ideal e entre 18.5 e 25');
}

