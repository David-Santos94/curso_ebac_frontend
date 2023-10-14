$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Insira o seu Nome',
            email: 'Insira o seu E-mail',
            telefone: 'Insira o seu Telefone',
            cpf: 'Insira o seu CPF',
            endereco: 'Insira o seu Endereço',
            cep: 'Insira o seu CEP',
        },
        submitHandler: function(form) {
            const camposCorretos = [$('#nome').val(), $('#email').val(), $('#telefone').val(), $('#cpf').val(), $('#endereco').val(), $('#cep').val()];
            alert(`Seu Nome: ${camposCorretos[0]}\nSeu E-mail: ${camposCorretos[1]}\nSeu Telefone: ${camposCorretos[2]}\nSeu CPF: ${camposCorretos[3]}\nSeu Endereço: ${camposCorretos[4]}\nSeu CEP: ${camposCorretos[5]}`);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})