/*document.addEventListener("DOMContentLoaded", function() {
    var botaoIniciar = document.getElementById("botaoIniciar");
    botaoIniciar.addEventListener("click", function() {
        login();
    });
});*/


function hotel() {
    var Hotel = 'flintstones!';
    var userName;
    var hospede = [];
    var dias_hospedados;
    var calculo_diaria;
    var numeroQuarto;
    var quartos = [];
    var gratuidade = 0;
    var diaria = 0;
    var hospedeEncontrado = hospede;
    var total_inteira = 0;
    var total_meia = 0;
    var nomePesquisa;

    var auditorioLaranja = 150;
    var auditorioColorado = 350;
    var diasReservado = [];
    var auditorioEscolhido = '';
    var empresa;
    var diaSemana;
    var horaEvento;
    var duracaoEvento;
    var totalGarcons;
    var convidados;
    var custoPorGarcom;

    login();

    function inicio() {
        var escolha = parseInt(prompt('selecione uma opção:\n(1) reservar quarto.\n(2) cadastrar hospedes.\n(3) Consultar hospedes.\n(4) Abastecimento de veiculos.\n(5) Registrar eventos.\n(6)Manutenção do Ar condicionado.\n(7)Sair'));
        switch (escolha) {
            case 1:
                reserva_quartos();
                break;
            case 2:
                cadastrar_hospedes();
                break;
            case 3:
                cadastrar_hospedes_2();
                break;
            case 4:
                combustivel();
                break;
            case 5:
                evento();
                break;
            case 6:
                manutencao();
                break;
            case 7:
                sair();
                break;
            default:
                erro();
        }
    }

    function erro() {
        alert('Você não escolheu nenhuma opção');
        
    }

    function reserva_quartos() {
        var valor_diaria = parseFloat(prompt('digite o valor da diaria padrão'));
        while (isNaN(valor_diaria) || valor_diaria <= 0) {
            alert('Valor inválido!', userName);
            valor_diaria = parseFloat(prompt('digite o valor da diaria padrão'));
        }

        dias_hospedados = parseInt(prompt('Reservas de 1 a 30 dias. Quantas diárias serão necessárias'));
        while (isNaN(dias_hospedados) || dias_hospedados <= 0 || dias_hospedados > 30) {
            alert('Hospedagem apenas de 1 a 30 dias!');
            dias_hospedados = parseInt(prompt('Reservas de 1 a 30 dias. Quantos dias irá ficar hospedado em nosso hotel?'));
        }
        calculo_diaria = valor_diaria * dias_hospedados;
        alert('O valor de ' + dias_hospedados + ' dias de hospedagem é ' + calculo_diaria + ' reais');
        hospede = prompt('Qual é o nome do hospede?');

        reservarQuarto();
    }


    function reservarQuarto() {
        numeroQuarto = parseInt(prompt('Digite o número do quarto desejado (1-20):'), 10);
        if (isNaN(numeroQuarto)) {
            alert('Data invalida');
            inicio();
        } else if (quartos[numeroQuarto - 1]) {
            alert('Quarto ocupado, escolha outro quarto');
            inicio();
        } else {
            quartos.push(numeroQuarto);
            alert('Quarto reservado com sucesso!');

            if (confirm(userName + ', você confirma a hospedagem para ' + hospede + ' por ' + dias_hospedados + ' dias, para o quarto ' + numeroQuarto + ' por ' + calculo_diaria + ' reais.')) {
                alert('Reserva efetuada para ' + hospede);
            } else {
                alert('Reserva cancelada.');
            }
            inicio();
        }
    }

    function cadastrar_hospedes() {
        let diaria = parseFloat(prompt('Qual é o valor da diária padrão?'));

        if (isNaN(diaria) || diaria <= 0) {
            alert('Digite um valor válido para a diária.');
            cadastrar_hospedes();
            return;
        }

        while (true) {
            let nome = prompt('Digite o nome do hóspede ou digite PARE para encerrar o cadastro');
            if (nome.toUpperCase() === "PARE") {
                break;
            }

            let idade = parseInt(prompt("Qual a idade do hóspede?"));
            if (isNaN(idade) || idade < 1) {
                alert('Digite uma idade válida.');
                continue;
            }

            if (idade <= 6) {
                alert(nome + ' possui gratuidade');
            } else if (idade >= 60) {
                alert(nome + ' paga meia');
                total_meia++;
            } else {
                total_inteira++;
            }

            hospede.push({ nome: nome, idade: idade });
        }

        let valor_total_hospedagens = (total_inteira * diaria) + (total_meia * (diaria / 2));

        alert('O valor total das hospedagens é ' + valor_total_hospedagens.toFixed(2) + ' reais, com ' + total_inteira + ' diárias inteiras e ' + total_meia + ' diárias pela metade.');

        inicio();
    }

    function cadastrar_hospedes_2() {
        var escolha = parseInt(prompt('escolha uma opção: (1)-cadastrar (2)-pesquisar (3)-listar (4)- sair. '));

        switch (escolha) {
            case 1:
                cadastrar_hospedes();
                break;
            case 2:
                pesquisarPorNome();
                break;
            case 3:
                listar_usuarios();
                break;
            case 4:
                sair();
                break;
        }
    }

    function pesquisarPorNome() {
        var nomePesquisa = prompt('Digite o nome para pesquisa:');

        var nomeEncontrado = false;

        for (var i = 0; i < hospede.length; i++) {

            if (hospede[i].nome === nomePesquisa) {

                nomeEncontrado = true;
                break;
            }
        }

        if (nomeEncontrado) {
            alert(nomePesquisa + ' encontrado!');
            cadastrar_hospedes_2();
        } else {
            alert(nomePesquisa + ' não encontrado!');
            pesquisarPorNome();
        }
    }

    function listar_usuarios() {
        var nomes = hospede.map(item => item.nome);

        var lista_hospedes = 'Hospedes cadastrados:\n' + nomes.join('\n');

        alert(lista_hospedes);
    }

    function combustivel() {

        let precoAlcoolWayne = parseFloat(prompt("Qual o preço do álcool no posto Wayne Oil?"));
        let precoGasolinaWayne = parseFloat(prompt("Qual o preço da gasolina no posto Wayne Oil?"));
        let precoAlcoolStark = parseFloat(prompt("Qual o preço do álcool no posto Stark Petrol?"));
        let precoGasolinaStark = parseFloat(prompt("Qual o preço da gasolina no posto Stark Petrol?"));

        let precoTotalAlcoolWayne = precoAlcoolWayne * 42;
        let precoTotalGasolinaWayne = precoGasolinaWayne * 42;
        let precoTotalAlcoolStark = precoAlcoolStark * 42;
        let precoTotalGasolinaStark = precoGasolinaStark * 42;

        let combustivelWayne;
        if (precoAlcoolWayne < (precoGasolinaWayne * 0.7)) {
            combustivelWayne = "álcool";
        } else {
            combustivelWayne = "gasolina";
        }

        let combustivelStark;
        if (precoAlcoolStark < (precoGasolinaStark * 0.7)) {
            combustivelStark = "álcool";
        } else {
            combustivelStark = "gasolina";
        }


        let precoMinimoWayne = Math.min(precoTotalAlcoolWayne, precoTotalGasolinaWayne);
        let precoMinimoStark = Math.min(precoTotalAlcoolStark, precoTotalGasolinaStark);


        if (precoMinimoWayne < precoMinimoStark) {
            alert("O posto mais barato é o Wayne Oil e o combustível mais vantajoso é  " + combustivelWayne + ".");
        } else {
            alert("O posto mais barato é o Stark Petrol e o combustível mais vantajoso é  " + combustivelStark + ".");
        }

        inicio();
    }


    function evento() {

        function convidadosEvento() {

            convidados = parseInt(prompt('Qual numero de convidados para seu evento'));

            if (isNaN(convidados)) {
                alert('valor invalido');
            } else if (convidados > 350) {
                alert('quantidade de convidados superior a capacidade maxima');
                convidadosEvento();
            } else if (convidados <= 0) {
                alert('quantidade invalidada');
                convidadosEvento();

            } else if (convidados <= 150) {
                alert('Use o auditorio Laranja');
                auditorioEscolhido = 'laranja';

            } else if (convidados <= 220) {
                var cadeiraAdicionais = convidados - 150;
                alert('Ultilize o auditorio laranja mas sera necessario adicionar ' + cadeiraAdicionais + ' cadeiras a mais');
                auditorioEscolhido = 'laranja';
            } else {
                alert("ultilize o auditorio colorado");
                auditorioEscolhido = 'colorado';
            }
            agendaEvento();


        }

        convidadosEvento();

        function agendaEvento() {

            let diaSemana = [];

            diaSemana = prompt('Qual dia do seu evento?');
            if (diasReservado.includes(diaSemana)) {
                alert('Auditorio indisponivel');
                agendaEvento();
                return;
            }
            horaEvento = parseInt(prompt('digite a hora do evento'));
            empresa = prompt('Qual o nome da empresa');

            alert('Auditorio reservado para ' + empresa + " " + diaSemana + '. as ' + horaEvento + 'hs');
            diasReservado.push(diaSemana);

            calcularGarconsECusto(convidados);
        }

        convidadosEvento();

        function calcularGarconsECusto(convidados) {
            duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));

            const garconsPorConvidados = Math.ceil(convidados / 12);

            const garconsAdicionais = Math.floor(duracaoEvento / 2);

            totalGarcons = garconsPorConvidados + garconsAdicionais;

            custoPorGarcom = 10.50 * duracaoEvento;

            custoTotalGarcon = totalGarcons * custoPorGarcom;

            alert("São necessários " + totalGarcons + " garçons.");
            alert("custo: R$ " + custoTotalGarcon.toFixed(2));

            buffet(convidados, totalGarcons);
        }


        function buffet() {
            let quantidadeCafe = convidados * 0.2;
            let quantidadeAgua = convidados * 0.5;
            let quantidadeSalgado = convidados * 7;

            valorCafe = quantidadeCafe * 0.80;
            valorAgua = quantidadeAgua * 0.40;
            valorSalgado = (quantidadeSalgado / 100) * 34;

            valorBuffet = valorAgua + valorCafe + valorSalgado;
            valorTotalEvento = custoTotalGarcon + valorBuffet;

            alert('O evento precisara de ' + quantidadeCafe + ' litros de cafe, ' + quantidadeAgua + ' litros de agua, ' + quantidadeSalgado + ' salgados');

            relatorio();
        }



        function relatorio() {
            var confirma = confirm('Gostaria de confirmar a reserva?\n Evento no auditorio: ' + auditorioEscolhido + '\n Nome da empresa: ' + empresa + '\n Data: ' + diasReservado + ', ' + horaEvento + 'Hs \n Duração evento: ' + duracaoEvento + 'H \n Quantidade garçons' + totalGarcons + '\n Quantidade de convidados: ' + convidados + '\n \n Custo Dos garçons:' + custoTotalGarcon.toFixed(2) + '\n Custo do buffet: ' + valorBuffet.toFixed(2) + '\n\n valor total do evento: ' + valorTotalEvento.toFixed(2));

            if (confirma) {
                alert('Reserva efetuada com sucesso');
            } else {
                alert('Reserva não efetuada');
            }
            inicio();
        }

    }


    function manutencao() {
        var empresaMaisBarata = "";
        var orcamentoEmpresaMaisBarata = Infinity;

        do {
            var empresa = prompt('Qual o nome da empresa?');
            var valorPorAparelho = parseFloat(prompt('Qual o valor por aparelho?'));
            var quantidadeAparelho = parseInt(prompt('Qual a quantidade de aparelhos?'));
            var porcentagemDesconto = parseInt(prompt('Qual a porcentagem de desconto?')) / 100;
            var quantMinimaDesconto = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));

            var orcamento = valorPorAparelho * quantidadeAparelho;

            if (quantidadeAparelho >= quantMinimaDesconto) {
                var valorDesconto = orcamento * porcentagemDesconto;
                orcamento -= valorDesconto;
            }

            if (orcamento < orcamentoEmpresaMaisBarata) {
                empresaMaisBarata = empresa;
                orcamentoEmpresaMaisBarata = orcamento;
            }

            var continuar = prompt('Deseja informar dados de outra empresa? (Digite "sim" ou "não")').toLowerCase();

        } while (continuar === "sim");

        alert('A empresa mais barata é ' + empresaMaisBarata + ' com um custo de R$ ' + orcamentoEmpresaMaisBarata.toFixed(2));

        inicio();
    }


    function sair() {
        var confirma = confirm("você deseja sair");
        if (confirma) {
            alert("Muito obrigado e até logo " + userName);
            exit();
        } else {
            cadastrar_hospedes_2();
        }
    }

    function login() {
        alert('Seja bem vindo ao hotel ' + Hotel)
        userName = prompt('Qual seu nome de usuario: ')
        var senha = prompt('digite sua senha')

        if (isNaN(senha) || senha === '') {
            alert('informe um valor valido');
            login();
        } else if (senha != '2678') {
            alert('senha incorreta');
            login();
        } else {
            alert(userName + ', é um imenso prazer ter você por aqui!')
            inicio();
        }


    }

}