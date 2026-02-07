const fs= require('fs');
const { text } = require('stream/consumers');



const caminhoArquivo= process.argv;
const caminho= caminhoArquivo[2];



fs.readFile(caminho, 'utf-8', (err, data) => {
    if(err){
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    quebreDeParagrafo(data);
    // verificarPalavraDuplicadas(data);
}   );

console.log(caminho);


// criar um array para armazenar as palavras do texto
//contar as concorrência 
//montar um objeto com resultado 

// {
//     'web': 3,
//     'java': 2,
//     'python': 1
// }
function verificarPalavraDuplicadas(texto){
    const listaPAlavras=texto.split(' ');
    const resultado={};
    listaPAlavras.forEach(palavra => {
        resultado[palavra] = resultado[palavra] ? resultado[palavra] + 1 : 1;

})
console.log(resultado);
};


function quebreDeParagrafo(texto){
    const paragrafos= texto.toLowerCase().split('\n');
    const resultado= paragrafos.map(paragrafo => {
        return verificarPalavraDuplicadas(paragrafo);
    });
    console.log(paragrafos);
    
}
