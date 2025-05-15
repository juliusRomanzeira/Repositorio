import React, { useState } from 'react';
import './CadastroFuncionario.css'; // Importa o CSS

function CadastroFuncionario() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [idContrato, setIdContrato] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Cadastro enviado:', { nome, senha, idContrato });
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2>Cadastro de Funcionário</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />

          <label htmlFor="idContrato">ID do Contrato:</label>
          <input
            type="text"
            id="idContrato"
            value={idContrato}
            onChange={(e) => setIdContrato(e.target.value)}
            required
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroFuncionario;
