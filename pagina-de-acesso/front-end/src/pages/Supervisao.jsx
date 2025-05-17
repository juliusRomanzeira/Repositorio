import React, { useState, useEffect } from 'react';
import './Supervisao.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [velocidade, setVelocidade] = useState('6 m/s');
  const [statusText, setStatusText] = useState('Em operação');
  const [tempo, setTempo] = useState(27); // valor inicial da contagem
  const [contando, setContando] = useState(false); // controle da contagem
  const [incremento, setIncremento] = useState(false); // controle da contagem

  useEffect(() => {
    let timer;
    if (contando && tempo > 0) {
      timer = setTimeout(() => setTempo((t) => t - 1), 500);
    } else if (incremento && tempo < 27) {
      timer = setTimeout(() => setTempo((t) => t + 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [contando, incremento, tempo]); // <- inclua 'incremento' aqui

  const iniciarIncremento = () => {
    setContando(false);      // Garante que decremento está desligado
    setIncremento(true);     // Ativa incremento
  };

  const iniciarContagem = () => {
    setIncremento(false);    // Garante que incremento está desligado
    setContando(true);       // Ativa decremento
  };
  const pausarContagem = () => {
    setContando(false);
    setIncremento(false);    // <- Desliga ambos
  };

  // Funções de controle
  const handleBobinar = () => {
    setStatusText('Bobinando...');
    setVelocidade('6 m/s');
    iniciarIncremento();
  };

  const handleDesbobinar = () => {
    setStatusText('Desbobinando...');
    setVelocidade('10 m/s');
    iniciarContagem();
  };

  const handleParar = () => {
    setStatusText('Parada...');
    setVelocidade('0 m/s');
    pausarContagem();
  };

  return (
    <div className="container">
      <h1 className="header">Sistema de Supervisão - Bobinadeira</h1>

      <section className="section" aria-labelledby="machine-status">
        <h2 id="machine-status">Status da Máquina</h2>
        <p><strong>Bitola Atual:</strong> {tempo} cm</p>
        <p><strong>Velocidade:</strong>{velocidade}</p>
        <p><strong>Status:</strong> {statusText}</p>
      </section>
      
      <section className="section" aria-labelledby="machine-status">
        <h2 id="operation-controls">Controles de Operação</h2>
        <p>
          <button className="start-button" onClick={handleBobinar}>Bobinar</button>
          <button className="desbobination-button" onClick={handleDesbobinar}>Desbobinar</button>
          <button className="stop-button" onClick={handleParar}>PARAR</button>
        </p>
      </section>

      <section className="section" aria-labelledby="production-data">
        <h2 id="production-data">Dados de Produção</h2>
        <div className="production-table">
          <div className="table-row">
            <div className="table-cell"><strong>Bitola</strong></div>
            <div className="table-cell"><strong>Velocidade (m/s)</strong></div>
            <div className="table-cell"><strong>Produção por Hora (ajustada)</strong></div>
            <div className="table-cell"><strong>Produção por Turno (8h)</strong></div>
          </div>
          <div className="table-row">
            <div className="table-cell">27 cm</div>
            <div className="table-cell">6</div>
            <div className="table-cell">18.900 metros (18.900 peças)</div>
            <div className="table-cell">151.200 metros (151.200 peças)</div>
          </div>
          <div className="table-row">
            <div className="table-cell">17 cm</div>
            <div className="table-cell">10</div>
            <div className="table-cell">31.500 metros (31.500 peças)</div>
            <div className="table-cell">252.000 metros (252.000 peças)</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Outras (máxima)</div>
            <div className="table-cell">11</div>
            <div className="table-cell">34.650 metros (34.650 peças)</div>
            <div className="table-cell">277.200 metros (277.200 peças)</div>
          </div>
        </div>
        <div className="production-stats">
          <p><strong>Peças Desbobinadas (Turno Atual):</strong> 151.200 (Bitola 27 cm)</p>
          <p><strong>Peças Bobinadas (Turno Atual):</strong> 136.080 (90% das desbobinadas)</p>
        </div>
        <p className="note">* Assumindo peças de 1 metro. Ajustado para eficiência (87,5%) considerando setup e paradas.</p>
      </section>

      <section className="section" aria-labelledby="operation-details">
        <h2 id="operation-details">Detalhes de Operação</h2>
        <p><strong>Tempo de Setup por Troca:</strong> 5 minutos (8 trocas por turno, total 40 minutos)</p>
        <p><strong>Paradas Programadas:</strong> 2 paradas de 10 minutos (total 20 minutos por turno)</p>
        <p><strong>Tempo Útil por Turno (8h):</strong> 7 horas (após descontar setup e paradas)</p>
      </section>

      <section className="section" aria-labelledby="system-info">
        <h2 id="system-info">Informações do Sistema</h2>
        <p><strong>Interface Homem-Máquina (IHM):</strong> CLP MT8071IP</p>
        <p><strong>Protocolo de Comunicação:</strong> Modbus TCP/IP</p>
        <p><strong>Servidor Local:</strong> Raspberry Pi</p>
        <p><strong>Integração:</strong> Conexão com AWS para armazenamento de dados</p>
      </section>
      <div style={{ display: "flex", gap: 8 }}>
                    <button type="button" style={{ flex: 1 }} onClick={() => navigate(-1)}>
                        Voltar
                    </button>
                </div>
    </div>
  );
}

export default App;