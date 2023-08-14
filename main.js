    const form = document.getElementById("form-telefone");
    const nome = [];
    const numero = [];

    let linhas = " ";

    form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

    });

    function adicionaLinha() {
    const inputNomeCadastrado = document.getElementById("nome-cadastrado");
    const inputNumeroTelefone = document.getElementById("numero-telefone");

    if (nome.includes(inputNomeCadastrado.value)) {
        alert(`O Nome ${inputNomeCadastrado.value} já foi cadastrado`);
    } else {
        nome.push(inputNomeCadastrado.value);
        numero.push(inputNumeroTelefone.value);

        let linha = "<tr>";
        linha += `<td>${inputNomeCadastrado.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;

        linha += "</tr>";

        linhas += linha;
    }
    inputNomeCadastrado.value = "";
    inputNumeroTelefone.value = "";
    }

    function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
    }