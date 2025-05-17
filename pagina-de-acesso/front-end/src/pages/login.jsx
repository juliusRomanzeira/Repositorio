import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:3333/cadastro";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar usuários.");
        setLoading(false);
      });
  }, []);

  const handleCadastro = () => {
    navigate('/cadastro');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) =>
        (u.nome === nome || u.name === nome) &&
        (u.senha === senha || u.password === senha)
    );
    if (user) {
      setLoginSuccess(true);
      setLoginError("");
      navigate('/Home');
    } else {
      setLoginError("Nome ou senha inválidos.");
      setLoginSuccess(false);
    }
  };

  const abrirWhatsApp = () => {
    // const numero = '+5581982727878';
    // const mensagem = 'Acabei de ter um problema com o sistema, se trata de...';
    const url = `https://www.instagram.com/wattconsultoria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`;
    window.open(url, '_blank');
  };

  // Remover variáveis/formData/erros não utilizadas e ajustar os inputs
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
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', transition: 'border-color 0.2s' }}
              onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              placeholder="Login"
            />
            {loginError && (
              <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{loginError}</p>
            )}
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', transition: 'border-color 0.2s' }}
              onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              placeholder="Senha"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0rem' }}>
            <button
              style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onClick={handleLogin}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
            >
              Login
            </button>
            <button
              style={{ backgroundColor: '#d1d5db', color: 'black', padding: '0.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onClick={handleCadastro}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#bfc3ca')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#d1d5db')}
            >
              Adicionar Usuário
            </button>
          </div>
        </div>
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        fontSize: '0.75rem',
        color: '#6b7280'
      }}>
        Powered by NeuroFlux
      </div>
      </div>
    </div>
  );
}

export default Home;