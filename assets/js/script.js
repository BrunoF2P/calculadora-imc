const form = document.getElementById('form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * 2)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden')

    if (imc < 18.5) {
        description = 'Está abaixo do intervalo considerado saudável. Pode ser útil consultar um nutricionista ou médico para avaliar sua dieta e saúde geral.'
    } else if (imc >= 18.5 && imc <= 24.9) {
        description = "Que bom que você está com o peso normal. Continue mantendo uma alimentação equilibrada e um estilo de vida ativo para preservar sua saúde."
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (imc >= 25 && imc <= 29.9) {
        description = "Você está na faixa de sobrepeso. Considere ajustar sua dieta e aumentar a atividade física, pode ajudar a alcançar um peso mais saudável."
    } else if (imc >= 30 && imc <= 34.9) {
        description = "Indice de obesidade grau 1. É recomendável procurar orientação médica para desenvolver um plano de saúde personalizado."
    } else if (imc >= 35 && imc <= 39.9) {
        description = "Seu IMC está na faixa de obesidade grau 2. Consultar um profissional de saúde é importante para criar uma estratégia eficaz de perda de peso e melhorar sua saúde."
    } else if (imc >= 40) {
        description = "Seu IMC está na faixa de obesidade grau 3. É crucial buscar orientação médica para um plano de tratamento abrangente e monitorar possíveis riscos à saúde."
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;

})