function setupFormValidation() {
  const form = document.getElementById("cadastroForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();

    let erros = [];

    if (nome.length < 3) erros.push("Nome deve ter pelo menos 3 caracteres.");
    if (!email.includes("@")) erros.push("E-mail inválido.");
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) erros.push("CPF inválido.");
    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) erros.push("Telefone inválido.");

    // Remove mensagens antigas
    document.querySelectorAll(".erro").forEach(p => p.remove());

    if (erros.length > 0) {
      erros.forEach(msg => {
        const p = document.createElement("p");
        p.classList.add("erro");
        p.style.color = 'red';
        p.textContent = msg;
        form.prepend(p);
      });
    } else {
      alert("Cadastro enviado com sucesso!");
      form.reset();
    }
  });
}
