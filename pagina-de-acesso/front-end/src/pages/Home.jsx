import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


const userRole = "gerente"; // Altere para "presidencia", "gerente" ou outro conforme necessário

const Home = () => {

  const navigate = useNavigate();

  const handleNovaOperacao = () => {
    // lógica para iniciar nova operação
    navigate('/Operacao');
  };

  const handleOperacoesEmAndamento = () => {
    // lógica para visualizar operações em andamento
    navigate('/Supervisao');
  };

  const handleRelatorios = () => {
    // lógica para acessar relatórios
    navigate('/Relatorios');
  };

  const handleConfiguracoes = () => {
    // lógica para acessar configurações
    navigate('/Configuracoes');
  };

  const handleLogout = () => {
    // lógica para logout
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', paddingBottom: '60px' }}>
      {/* Barra Superior */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1e3a8a',
          color: 'white',
          padding: '0.75rem 1rem',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Logo + frase */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/arco.png"
            alt="Logo"
            style={{ height: '40px', width: '40px', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '0.875rem' }}>
            Referência no setor de rebobinagem e manutenção de motores elétricos
          </span>
        </div>

        {/* Título centralizado */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', fontSize: '1.25rem' }}>
          Home
        </div>
      </div>

      {/* Botões centrais com borda */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 120px)',
        }}
      >
        <div
          style={{
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              maxWidth: '500px',
              minWidth: '300px',
            }}
          >
            <button onClick={handleNovaOperacao}>Iniciar Nova Operação</button>
            <button onClick={handleOperacoesEmAndamento}>Operações em Andamento</button>
            {(userRole === "gerente" || userRole === "presidencia") && (
              <button onClick={handleRelatorios}>Relatórios</button>
            )}
            <button onClick={handleConfiguracoes}>Configurações</button>
          </div>
        </div>
      </div>

     {/* Botão Logout fixo */}
<button
  onClick={handleLogout}
  style={{
    position: 'fixed',
    bottom: 0,

    /* centraliza */
    left: '50%',
    transform: 'translateX(-50%)',

    width: '500px',     
    maxWidth: '90vw',    

    padding: '1rem',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }}
  onMouseOver={e => (e.target.style.backgroundColor = '#dc2626')}
  onMouseOut={e => (e.target.style.backgroundColor = '#ef4444')}
>
  Logout
</button>

    </div>
  );
};

export default Home;