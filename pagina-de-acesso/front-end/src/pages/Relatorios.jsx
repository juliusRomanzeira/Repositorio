import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const API_URL = "http://localhost:3333/cadastro";

// Simulação de autenticação (substitua pelo seu contexto/estado real)
const getUser = () => {
    // Busca o usuário autenticado do localStorage (ajuste conforme sua lógica real)
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
    // Se não houver usuário no localStorage, retorna um objeto vazio ou null
    return {};
};

const Relatorios = () => {
    const navigate = useNavigate();
    const user = getUser();

    useEffect(() => {
        if (!(user.idContrato === 1 || user.idContrato === 2)) {
            navigate('/'); // Redireciona para home ou login se não autorizado
        }
    }, [user, navigate]);

    return (
        <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
            <h1>Relatórios da Bobinadeira</h1>
            <section style={{ marginBottom: 24 }}>
                <h2>Informações Gerais</h2>
                <ul>
                    <li>Status: Operando normalmente</li>
                    <li>Produção diária: 120 bobinas</li>
                    <li>Última manutenção: 10/06/2024</li>
                </ul>
            </section>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <button onClick={() => navigate('/relatorios/bobinas')}>
                    Relatório de Bobinas Criadas
                </button>
                <button onClick={() => navigate('/relatorios/estoque-armazem-a')}>
                    Estoque do Armazém A
                </button>
                <button onClick={() => navigate('/relatorios/estoque-armazem-b')}>
                    Estoque do Armazém B
                </button>
                <button onClick={() => navigate('/relatorios/clientes')}>
                    Dados de Clientes
                </button>
                <button onClick={() => navigate(-1)}>
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default Relatorios;