import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    login: '',
    senha: ''
  });
  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarFormulario = () => {
    const novosErros = {};
    if (!formData.login.trim()) novosErros.login = 'Login é obrigatório';
    if (formData.senha.length < 6) novosErros.senha = 'Senha deve ter pelo menos 6 caracteres';
    return novosErros;
  };


  const handleLogin = (e) => {
    console.log("login feito ", formData);
    }

  const abrirWhatsApp = () => {
    const numero = '+5581982727878';
    const mensagem = 'Acabei de ter um problema com o sistema, se trata de...';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '20rem', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '0.5rem' }}>
          <button
            onClick={abrirWhatsApp}
            style={{ backgroundColor: '#22c55e', color: 'white', padding: '0.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#16a34a')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#22c55e')}
          >
            Suporte
          </button>
        </div>
        <img
          src="Arco.png"
          alt="Logo"
          style={{ display: 'block', margin: '0 auto 1.5rem', width: '100px', height: '100px' }}
        />
        <h1 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Login</h1>
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              id="login"
              name="login"
              value={formData.login}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', transition: 'border-color 0.2s' }}
              onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              placeholder="Login"
            />
            {erros.login && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{erros.login}</p>}
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', transition: 'border-color 0.2s' }}
              onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              placeholder="Senha"
            />
            {erros.senha && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{erros.senha}</p>}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onClick={handleLogin}
              onMouseOver={(e)=> (e.target.style.backgroundColor = '#2563eb')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
            >
              Login
            </button>
            <button style={{ backgroundColor: '#d1d5db', color: 'black', padding: '0.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onClick={() => alert('Adicionar Usuário funcionalidade ainda não implementada')}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#bfc3ca')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#d1d5db')}
            >
              Adicionar Usuário
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;