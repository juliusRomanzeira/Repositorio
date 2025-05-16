import React, { useState } from 'react';
import './CadastroFuncionario.css'; // Importa o CSS

function CadastroFuncionario() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [idContrato, setIdContrato] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha.length < 6) {
      alert('A senha deve ter mais de 6 dígitos!');
      return;
    }

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!idContrato) {
              alert('Selecione uma função na empresa!');
              return;
            }
            handleSubmit(e);
          }}
        >
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

          <label htmlFor="idContrato">Função na Empresa:</label>
          <div className="contrato-buttons" style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <button
              type="button"
              style={{
                backgroundColor: idContrato === '1' ? '#333333' : 'grey',
                color: 'white',
                width: '25%',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onClick={() => setIdContrato(idContrato === '1' ? '' : '1')}
            >
              Presidência
            </button>
            <button
              type="button"
              style={{
                backgroundColor: idContrato === '2' ? '#333333' : 'grey',
                color: 'white',
                width: '25%',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onClick={() => setIdContrato(idContrato === '2' ? '' : '2')}
            >
              Gerência
            </button>
            <button
              type="button"
              style={{
                backgroundColor: idContrato === '3' ? '#333333' : 'grey',
                color: 'white',
                width: '25%',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onClick={() => setIdContrato(idContrato === '3' ? '' : '3')}
            >
              Operador
            </button>
            <button
              type="button"
              style={{
                backgroundColor: idContrato === '4' ? '#333333' : 'grey',
                color: 'white',
                width: '25%',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onClick={() => setIdContrato(idContrato === '4' ? '' : '4')}
            >
              PCD
            </button>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroFuncionario;