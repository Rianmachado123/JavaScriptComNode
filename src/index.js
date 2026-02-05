const fs= require('fs');



const caminhoArquivo= process.argv;
const caminho= caminhoArquivo[2];



fs.readFile(caminho, 'utf-8', (err, data) => {
    if(err){
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', data);
}   );

console.log(caminho);

