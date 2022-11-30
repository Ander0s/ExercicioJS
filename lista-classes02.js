/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instacie uma pessoa chamando José que tem 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    constructor (nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
    }
   get calculaIMC(){
        return this.peso/(this.altura*this.altura);
    }        
}
const pessoa1 = new Pessoa('jose', 1.75, 70);
 
console.log(pessoa1.calculaIMC);


