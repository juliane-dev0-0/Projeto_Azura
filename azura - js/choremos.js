

function enviar(){
    let nome = document.getElementById('imput-nome').value
    let idade = document.getElementById('imput-idade').value
    let estudo = document.getElementById('imput-estudo').value
    let sobre = document.getElementById('descricao').value
    alert(`Nome do Voluntário: ${nome}\nIdade: ${idade}\nÁrea de Estudo/Profissional: ${estudo}\nFale sobre si: ${sobre}`);

}