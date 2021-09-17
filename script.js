let vendedor = [];
let tabela = document.querySelector("#tabela");
const fields = document.querySelectorAll('[required]')

//Sistema de Gerenciamente de Vendedores
function adicionarVendedor() {
    let nome = document.querySelector("#nome").value
    let salario = parseFloat(document.querySelector("#salario").value)
    let quantidadeVendas = parseFloat(document.querySelector("#quantidade").value)
    let valorVendas = parseFloat(document.querySelector("#valor").value)

    let salarioFinal = calculoSalarioFinal(salario, quantidadeVendas, valorVendas)

    vendedor.push({
        nomeVendedor: nome,
        salarioVendedor: salario.toFixed(2),
        salarioFinalVendedor: salarioFinal.toFixed(2)
    })
    mostrarVendedor()
}

function calculoSalarioFinal(salario, quantidade, vendas) {
    let final = salario + (quantidade * vendas * 0.15);
    return final
}

function mostrarVendedor() {
    tabela.innerHTML = "<th><tr><td class=\"titulo\">Vendedor</td><td class=\"titulo\">Salário</td><td class=\"titulo\">Salário Final</td></tr></th>"
    for (let i = 0; i < vendedor.length; i++) {
        tabela.innerHTML += "<tr>" + "<td>" + vendedor[i].nomeVendedor + "</td> " + "<td>" + vendedor[i].salarioVendedor + "</td>" + "<td>" + vendedor[i].salarioFinalVendedor + "</td>" + "</tr>"
    }
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    adicionarVendedor()
})