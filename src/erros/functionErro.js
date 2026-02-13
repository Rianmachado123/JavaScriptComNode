function trarErro(erro) {
    if (erro.code === 'ENOENT') {
    throw new Error('Arquivo não encontrado!');
    }else{
        console.log('Erro na aplicalção:', erro.message);
    }
}

module.exports = trarErro;

