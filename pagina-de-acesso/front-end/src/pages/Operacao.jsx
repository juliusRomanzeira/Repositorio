import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Operacao = () => {
    const [bitola, setBitola] = useState("27");
    const [metros, setMetros] = useState("");
    const [armazem, setArmazem] = useState("A");
    const navigate = useNavigate();

    const handleConfirmar = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de envio dos dados
        alert(
            `Bitola: ${bitola}cm\nMetros: ${metros}\nArmazém destino: ${armazem}`
        );
    };

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ccc", borderRadius: 8 }}>
            <h2>Operação</h2>
            <form onSubmit={handleConfirmar}>
                <div style={{ marginBottom: 16 }}>
                    <label>Bitola:</label><br />
                    <select value={bitola} onChange={e => setBitola(e.target.value)}>
                        <option value="27">27cm</option>
                        <option value="78">78cm</option>
                    </select>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Quantidade de metros:</label><br />
                    <input
                        type="number"
                        min="1"
                        value={metros}
                        onChange={e => setMetros(e.target.value)}
                        required
                        style={{ width: "100%" }}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Armazém destino:</label><br />
                    <select value={armazem} onChange={e => setArmazem(e.target.value)}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                    <button type="submit" style={{ flex: 1 }}>Confirmar</button>
                    <button type="button" style={{ flex: 1 }} onClick={() => navigate(-1)}>
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Operacao;