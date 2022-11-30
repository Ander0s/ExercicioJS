/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule 
e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3; 

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

const notas=[5,4,2];
const media= (notas[0]+notas[1]+notas[2])/notas.length;

    if (media<5) {
    console.log('reprovado, media:',media);
 
    }else if (media>7) {
    console.log('aprovado, media:',media);
    } else {
    console.log('recuperacao, media:',media);
    }
