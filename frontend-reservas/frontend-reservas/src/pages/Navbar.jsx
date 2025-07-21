import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Salas</Link>
      <Link to="/reservar" style={{ margin: '0 10px' }}>Reservar</Link>
      <Link to="/mis-reservas" style={{ margin: '0 10px' }}>Mis Reservas</Link>
    </nav>
  );
}