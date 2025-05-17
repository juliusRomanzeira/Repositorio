import React, { useState } from "react";

const Configuracoes = ({ history }) => {
    const [acessibilidade, setAcessibilidade] = useState(false);
    const [tema, setTema] = useState("claro");
    const [alertas, setAlertas] = useState(true);

    // Novo estado para o status da bobinadeira
    const [statusBobinadeira, setStatusBobinadeira] = useState("parada"); // "bobinando", "desbobinando" ou "parada"

    // Simulação de informações do sistema
    const sistemaInfo = {
        versao: "1.0.0",
        navegador: navigator.userAgent,
        plataforma: navigator.platform,
        statusBobinadeira,
    };

    const handleVoltar = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else if (history && history.goBack) {
            history.goBack();
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: "40px auto", padding: 24, border: "1px solid #ddd", borderRadius: 8 }}>
            <h2>Configurações</h2>

            {/* 1. Opção de acessibilidade */}
            <section style={{ marginBottom: 24 }}>
                <h3>Acessibilidade</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={acessibilidade}
                        onChange={() => setAcessibilidade((prev) => !prev)}
                    />
                    Ativar alto contraste
                </label>
            </section>

            {/* 2. Preferências de interface */}
            <section style={{ marginBottom: 24 }}>
                <h3>Preferências de Interface</h3>
                <label>
                    Tema:&nbsp;
                    <select value={tema} onChange={(e) => setTema(e.target.value)}>
                        <option value="claro">Claro</option>
                        <option value="escuro">Escuro</option>
                        <option value="sistema">Automático (Sistema)</option>
                    </select>
                </label>
            </section>

            {/* 3. Configurações de alerta */}
            <section style={{ marginBottom: 24 }}>
                <h3>Configurações de Alerta</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={alertas}
                        onChange={() => setAlertas((prev) => !prev)}
                    />
                    Receber notificações de alerta
                </label>
            </section>

            {/* 4. Informações do sistema */}
            <section style={{ marginBottom: 24 }}>
                <h3>Informações do Sistema</h3>
                <ul>
                    <li>Versão do app: {sistemaInfo.versao}</li>
                    <li>Navegador: {sistemaInfo.navegador}</li>
                    <li>Plataforma: {sistemaInfo.plataforma}</li>
                    <li>
                        Status da bobinadeira:&nbsp;
                        <select value={statusBobinadeira} onChange={e => setStatusBobinadeira(e.target.value)}>
                            <option value="bobinando">Bobinando</option>
                            <option value="desbobinando">Desbobinando</option>
                            <option value="parada">Parada</option>
                        </select>
                    </li>
                </ul>
            </section>

            {/* 5. Botão para voltar */}
            <button onClick={handleVoltar} style={{ padding: "8px 16px" }}>
                Voltar
            </button>
        </div>
    );
};

export default Configuracoes;