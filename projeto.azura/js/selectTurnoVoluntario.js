const radioButtons = document.querySelectorAll('input[type="radio"]');

            // Função para alterar a cor do texto dentro do botão clicado
            function changeTextColor(event) {
                radioButtons.forEach(radio => {
                    radio.parentElement.style.backgroundColor = '';
                    radio.parentElement.style.color = '#F6F6F6';
                });
                event.target.parentElement.style.backgroundColor = '#151a7a';
                event.target.parentElement.style.color = '#00FFC2';
            }

            // Adicione um ouvinte de clique a cada radio button
            radioButtons.forEach(radio => {
                radio.addEventListener('click', changeTextColor);
            });




 // INICIO_mask_telefone

 const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

// mask_telefone_FIM