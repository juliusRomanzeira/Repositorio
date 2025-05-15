import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';
import CadastroFuncionario from './pages/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cadastro" element={<CadastroFuncionario />} />
      </Routes>
    </Router>
  );
}

export default App;
