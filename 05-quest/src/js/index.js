//Ao enviar o formulário, é necessário verificar se o campo foi preenchido, se não, a borda deve ficar vremelha e adicionar a tag *campo obrigatório e quando um campo for preenchido, a borda deve ficar verde

//1- enviar formulario 
//2- fazer verificação se está preenchido
//3- se não estiver preenchido, adicionar borda vermelha e a tag *campo obrigatorio
//4- no momento que o formulário for preenchido, adicionar a borda verde e remover o *campo obrigatório 

const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.input')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    checarInputs()
})

function checarInputs(){
    inputs.forEach(function(input){
        if(input.value === '' || input.value === undefined){
            const campoInput = input.parentElement
            campoInput.className ='campo-input ativo'
        }else{
            function verificarInputs(){
                const campoInput = input.parentElement
                campoInput.className = 'campo-input verificado'
            }
            verificarInputs()
        }
    })
}   


// const form = document.querySelector('.form')
// const nome = document.getElementById('nome')
// const email = document.getElementById('email')
// const fone = document.getElementById('fone')
// const mensagem = document.getElementById('mensagem')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     checkInputs()
// })

// function checkInputs(){
//     const nomeValue = nome.value
//     const emailValue = email.value
//     const foneValue = fone.value
//     const mensagemValue = mensagem.value

//     if(nomeValue === '' || undefined){
//         validacaoErro(nome)
//     }else{
//         validacaoSucesso(nome)
//     }
//     if(emailValue === '' || undefined){
//         validacaoErro(email)
//     }else{
//         validacaoSucesso(email)
//     }
//     if(foneValue === '' || undefined){
//         validacaoErro(fone)
//     }else{
//         validacaoSucesso(fone)
//     }
//     if(mensagemValue === '' || undefined){
//         validacaoErro(mensagem)
//     }else{
//         validacaoSucesso(mensagem)
//     }
// }

// function validacaoErro(input){
//     const campoInput = input.parentElement;
//     campoInput.className = 'campo-input ativo'
// }

// function validacaoSucesso(input){
//     const campoInput = input.parentElement;
//     campoInput.className = 'campo-input verificado'
// }


