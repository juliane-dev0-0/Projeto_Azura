const handleSubmit = async (event) => {

   
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const area = document.getElementById('area').value;
    const sobre_voce = document.getElementById('sobre_voce').value;
    const telefone = document.getElementById('telefone').value;

    // Capturar o turno escolhido
    const turnoElement = document.querySelector('input[name="group1"]:checked');
    const turno = turnoElement ? turnoElement.id.replace('-radio', '') : '';

    const formData = {
        NOME: nome,
        IDADE: idade,
        'ÁREA DE ESTUDO / PROFISSIONAL': area,
        'NOS FALE UM POUCO SOBRE VOCÊ': sobre_voce,
        TURNO: turno,
        TELEFONE: telefone
        
    };

    // Enviar para o seu servidor
    const response = await fetch('https://sheetdb.io/api/v1/m233gaj237x2x', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    // Processar a resposta, se necessário
    const result = await response.json();
    console.log(result);
}

document.getElementById('buttonEnvieFormulario').addEventListener('click', handleSubmit);




// áreea de explicação deste código 




// const handleSubmit = async (event) => {

//=> nesa linha é criada uma const handleSubmit que recebe a palavra-chave async indica que a função contém operações assíncronas(Quando uma função é declarada como async, ela sempre retorna uma Promise. A execução da função assíncrona é pausada quando ela encontra a palavra-chave await, que é usada para esperar que uma Promise seja resolvida ou rejeitada.)
//tendo um event como parâmetro ou seja, após ter um envio de formulário ou click.Dentro desta função, você encontrará o código para lidar com o formulário, coletando os valores dos campos do formulário (nome, idade, área, etc.) e realizando outras operações assíncronas, como o envio desses dados para um servidor.

   
//     event.preventDefault();

// => Essa abordagem é comumente usada em situações em que você deseja controlar completamente o processo de envio de formulário por meio de código JavaScript, sem recarregar a página.


//     const nome = document.getElementById('nome').value;
//     const idade = document.getElementById('idade').value;
//     const area = document.getElementById('area').value;
//     const sobre_voce = document.getElementById('sobre_voce').value;
//     const telefone = document.getElementById('telefone').value;

// => pega os valores do campo de formulário 


//     const turnoElement = document.querySelector('input[name="group1"]:checked');

// => nesta parte usa o querySelector para encontrar o primeiro elemento  do seletor especificado, que procura um input  que tenha o atributo name igual a group1 e que esteja marcado :checked ou seja, vai pegar o input que o usuário clicou (manha,tarde,noite);
//e a const apos isso vai possuir a referência  do elemento input escolhido pelo usuário

//     const turno = turnoElement ? turnoElement.id.replace('-radio', '') : '';

// => cria uma const turno e recebe um operador ternário (tipo um if/else), onde quer dizer que se turnoElement não for 'null' vai pegar a propriedade do id que seria tipo o ("manha-radio", "tarde-radio", ou "noite-radio", sla tipo isso), que retira a parte radio e deixa só manha,tade e noite, usando o metodo REPLACE  que substitui a string -radio para uma string vazia.



//     const formularioDados = {
//         NOME: nome,
//         IDADE: idade,
//         'ÁREA DE ESTUDO / PROFISSIONAL': area,
//         'NOS FALE UM POUCO SOBRE VOCÊ': sobre_voce,
//         TURNO: turno,
//         TELEFONE: telefone
        
//     };

// => Cria um objeto chamado formularioDados com as informações capturadas do formulário.


//     const response = await fetch('https://api.sheetmonkey.io/form/c3znapwnSZCnoJixR6LtmE', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formularioDados)
//     });

// => Esta é uma função assíncrona que faz uma requisição HTTP usando o método fetch. Ela especifica o URL do servidor para onde os dados do formulário serão enviados.method: 'post': Isso define o método HTTP como POST. No contexto de formulários da web, o método POST é comumente usado para enviar dados do formulário para o servidor.
// headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },:  Isso especifica os cabeçalhos da requisição. No caso, está indicando que o cliente (quem está enviando a requisição) aceita dados no formato JSON e está enviando dados no formato JSON. Isso é importante para o servidor entender como interpretar os dados recebidos.
// body: JSON.stringify(formData): Isso contém os dados a serem enviados para o servidor. JSON.stringify(formData) converte o objeto formData em uma string JSON. O objeto formData contém as informações do formulário, como nome, idade, área de estudo, etc.
// });


//     const result = await response.json();
//     console.log(result);
// }

// => 
// Este fecha o bloco de configuração da requisição Fetch.
// const result = await response.json();

// Isso lida com a resposta da requisição. response.json() é uma função assíncrona que analisa o corpo da resposta como JSON. O await aguarda até que a análise seja concluída.
// console.log(result);

// Por fim, imprime o resultado no console. Dependendo da resposta do servidor, result pode conter informações úteis sobre o sucesso ou falha da operação.


// document.getElementById('buttonEnvie').addEventListener('click', handleSubmit);

// => aqui vai pegar o id do botao e adicionar um evento que qndo clicar no botao ele chama a função handleSubmit. 


