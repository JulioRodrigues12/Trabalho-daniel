export const retorno = (mensagem, possuiErro) => {
    if(
        typeof possuiErro !== 'boolean' || 
        !mensagem || 
        mensagem.length < 1
    ) return null

    return {
        message: mensagem,
        error: possuiErro
    }
}