let form = document.querySelector("form");
let nome = document.getElementById("nome");
const codigo = document.getElementById("codigo");
const telefone = document.getElementById("telefone");
const tabela = document.querySelector("#tabela tbody");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o recarregamento da página
  // PEGAR VALORES
  const nomeValor = nome.value.trim();
  const codigoValor = codigo.value.trim();
  const telefoneValor = telefone.value.trim();

  // VALIDAÇÕES
  if (nomeValor.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    return;
  }
  if (!/^\d{5}$/.test(codigoValor)) {
    alert("O código deve ter exatamente 5 dígitos numéricos.");
    return;
  }

  if (!/^\d{9,15}$/.test(telefoneValor)) {
    alert("O telefone deve ter entre 9 e 15 dígitos.");
    return;
  }

  // SE PASSAR NAS VALIDAÇÕES → ADICIONAR NA TABELA
  const novaLinha = document.createElement("tr");

  // CORREÇÃO: Uso de ${} para interpolar as variáveis
  novaLinha.innerHTML = `
    <td>${nomeValor}</td>
    <td>${codigoValor}</td>
    <td>${telefoneValor}</td>
  `;

  // CORREÇÃO: Adicionar a linha à tabela
  tabela.appendChild(novaLinha);

  // Limpa os campos do formulário após adicionar
  form.reset();
});
