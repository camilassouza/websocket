const conexoesDocumento = [];

function adicionarConexao (conexao) {
    conexoesDocumento.push(conexao)
    console.log(conexoesDocumento)
}

function obterUsuariosDocumento (nomeDocumento) {
    return conexoesDocumento
        .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
        .map((conexao) => conexao.nomeUsuario)
}


function removerConexao (nomeDocumento, nomeUusario) {
    const indece = conexoesDocumento.findIndex((conexao) => {
        return conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUusario 
    })

    if(indece !== -1) {
        conexoesDocumento.splice(indice, 1)
    }
}

function encontrarConexao (nomeDocumento, nomeUsuario) {
    const indece = conexoesDocumento.find((conexao) => {
        return conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUusario 
    })

    return indece

}

export {adicionarConexao, obterUsuariosDocumento, removerConexao, encontrarConexao}