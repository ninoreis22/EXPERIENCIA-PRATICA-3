const templates = {
  index: `
    <section>
      <h2>Bem-vindo à ONG Esperança</h2>
      <p>Transformando vidas através da solidariedade e do voluntariado.</p>
      <img src="img/voluntariado.jpg" alt="Voluntários ajudando em projeto social">
    </section>
  `,
  projetos: `
    <section>
      <h2>Projeto Semeando Futuro</h2>
      <img src="img/doacao.jpg" alt="Distribuição de alimentos">
      <p>Oferecemos cestas básicas e oficinas de capacitação para famílias em vulnerabilidade.</p>
    </section>
    <section>
      <h2>Voluntariado em Ação</h2>
      <img src="img/equipe.jpg" alt="Equipe de voluntários">
      <p>Participe como voluntário em nossas ações e faça a diferença!</p>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Cadastro de Voluntário</h2>
      <form id="cadastroForm">
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label>Nome Completo:<br><input type="text" name="nome" required></label><br>
          <label>E-mail:<br><input type="email" name="email" required></label><br>
          <label>CPF:<br><input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00"></label><br>
          <label>Telefone:<br><input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000"></label><br>
          <label>Data de Nascimento:<br><input type="date" name="dataNascimento" required></label>
        </fieldset>
        <fieldset>
          <legend>Endereço</legend>
          <label>Endereço:<br><input type="text" name="endereco" required></label><br>
          <label>CEP:<br><input type="text" id="cep" name="cep" required placeholder="00000-000"></label><br>
          <label>Cidade:<br><input type="text" name="cidade" required></label><br>
          <label>Estado:<br><input type="text" name="estado" maxlength="2" required placeholder="SP"></label>
        </fieldset>
        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `
};
