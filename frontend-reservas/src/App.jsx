import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Salas from './pages/Salas';
import Reservar from './pages/Reservar';
import MisReservas from './pages/MisReservas';
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Salas />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
      </Routes>
    </BrowserRouter>
  );
}
