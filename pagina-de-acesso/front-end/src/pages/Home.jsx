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
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: 300, margin: "40px auto" }}>
      <button onClick={handleNovaOperacao}>Iniciar Nova Operação</button>
      <button onClick={handleOperacoesEmAndamento}>Operações em Andamento</button>
      {(userRole === "gerente" || userRole === "presidencia") && (
        <button onClick={handleRelatorios}>Relatórios</button>
      )}
      <button onClick={handleConfiguracoes}>Configurações</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;