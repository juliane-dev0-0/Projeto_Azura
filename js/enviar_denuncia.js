const botao_enviar = async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const contato = document.getElementById('contato').value;
    const local_denuncia = document.getElementById('local_denuncia').value;
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value; 

    const formData = {
        NOME: nome,
        DATA: data,
        CONTATO: contato,
        'LOCAL DE DENÚNCIA': local_denuncia,
        TÍTULO: titulo,
        DESCRIÇÃO: descricao
    };

    const response = await fetch('https://sheetdb.io/api/v1/ghbdbhtf9n7dw', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result);
}



let paputs = document.getElementById('buttonEnvie')

paputs.addEventListener('click', botao_enviar);


