import { useEffect, useState } from 'react';
import api from '../api';

export default function MisReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = () => {
    api.get('/reservas/mis-reservas')
      .then(res => setReservas(res.data))
      .catch(err => console.error(err));
  };

  const eliminar = (id) => {
    api.delete(`/reservas/${id}`)
      .then(() => cargarReservas())
      .catch(err => alert('Error al eliminar'));
  };

  return (
    <div>
      <h2>Mis Reservas</h2>
      <ul>
        {reservas.map(r => (
          <li key={r.id}>
            Usuario: {r.nombre_usuario} - Sala: {r.sala_id}
            <button onClick={() => eliminar(r.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}