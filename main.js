const numeroSenha = document.queryselector('parametro-senha_texto')


tamanhoSenha = 8
numeroSenha.textContext = tamanhoSenha;


const botoes = document.querySelectorAll('.parametro-senha_botao')

botoes[0].onclick = diminuir;

function diminuir(){
    tamanhoSenha--;
    numeroSenha.textContext = tamanhoSenha;

}