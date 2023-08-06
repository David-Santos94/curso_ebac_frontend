document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const msgValido = 'é menor que';
    const msgInvalido = 'é maior que';
    const msgInvalido1 = 'é igual a';
    const msgAprovado = 'Aprovado';
    const msgReprovado = 'Reprovado';
    const numA = document.getElementById('numeroA');
    const numB = document.getElementById('numeroB');
    
    if (parseInt(numA.value, 10) < parseInt(numB.value, 10)) {
        document.querySelector('.msgValidacao').classList.add('valido');
        document.querySelector('.msgValidacao').innerHTML = msgValido;
        document.querySelector('.msgValidacao').style.display = 'block';
        document.querySelector('.msgAprovacao').classList.add('valido');
        document.querySelector('.msgAprovacao').innerHTML = msgAprovado;
        document.querySelector('.msgAprovacao').style.display = 'block';        
    }
    else if (parseInt(numA.value, 10) == parseInt(numB.value, 10)) {
        document.querySelector('.msgValidacao').classList.add('invalido');
        document.querySelector('.msgValidacao').innerHTML = msgInvalido1;
        document.querySelector('.msgValidacao').style.display = 'block';
        document.querySelector('.msgAprovacao').classList.add('invalido');
        document.querySelector('.msgAprovacao').innerHTML = msgReprovado;
        document.querySelector('.msgAprovacao').style.display = 'block';

    }
    else {
        document.querySelector('.msgValidacao').classList.add('invalido');
        document.querySelector('.msgValidacao').innerHTML = msgInvalido;
        document.querySelector('.msgValidacao').style.display = 'block';
        document.querySelector('.msgAprovacao').classList.add('invalido');
        document.querySelector('.msgAprovacao').innerHTML = msgReprovado;
        document.querySelector('.msgAprovacao').style.display = 'block';
    }
})

document.getElementById('numeroA').addEventListener('click', function(e) {
    document.querySelector('.msgValidacao').style.display = 'none';
    document.querySelector('.msgAprovacao').style.display = 'none';
    document.querySelector('.msgValidacao').classList.remove('invalido');
    document.querySelector('.msgValidacao').classList.remove('valido');
    document.querySelector('.msgAprovacao').classList.remove('invalido');
    document.querySelector('.msgAprovacao').classList.remove('valido');
    
})

document.getElementById('numeroB').addEventListener('click', function(e) {
    document.querySelector('.msgValidacao').style.display = 'none';
    document.querySelector('.msgAprovacao').style.display = 'none';
    document.querySelector('.msgValidacao').classList.remove('invalido');
    document.querySelector('.msgValidacao').classList.remove('valido');
    document.querySelector('.msgAprovacao').classList.remove('invalido');
    document.querySelector('.msgAprovacao').classList.remove('valido');
    
})