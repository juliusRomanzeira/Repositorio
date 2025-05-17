import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';
import CadastroFuncionario from './pages/cadastro';
import Operacao from './pages/Operacao';
import Configuracoes from './pages/Configuracoes';
import Supervisao from './pages/Supervisao';
import Relatorios from './pages/Relatorios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cadastro" element={<CadastroFuncionario />} />
        <Route path="/Operacao" element={<Operacao />} />
        <Route path="/Configuracoes" element={<Configuracoes />} />
        <Route path="/Supervisao" element={<Supervisao />} />
        <Route path="/Relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
}

export default App;
