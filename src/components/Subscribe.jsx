'use client';
import { useState } from 'react';

function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    if (!name) {
      errors.name = 'El nombre es requerido';
      alert('El nombre es requerido');
    } else if (!email) {
      errors.email = 'El email es requerido';
      alert('El email es requerido');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email inválido';
      alert('Email inválido');
    }

    setError(errors);

    if (!Object.keys(errors).length) {
      setLoading(true);
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });

        if (!response.ok) {
          const errorDetails = await response.json();
          console.error('Error en la suscripción:', errorDetails.message);
          alert('Error en la suscripción: ' + errorDetails.message);
        } else {
          setName('');
          setEmail('');
          alert('Suscripción exitosa');
        }
      } catch (error) {
        console.error('Error en la suscripción:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <section>
          <input
            className="font-roboto pl-2 text-l xl:text-xl w-3/4 text-gray-700 my-2 h-9 xl:h-11 rounded border-solid border-gray-300 border-2"
            type="text"
            id="name"
            value={name}
            placeholder="Nombre *"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section>
          <input
            className="font-roboto pl-2 text-l xl:text-xl w-3/4 text-gray-700 my-2 h-9 xl:h-11 rounded border-solid border-gray-300 border-2"
            type="text"
            id="email"
            value={email}
            placeholder="Email *"
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <button
          className="my-2 bg-[#d44620] hover:bg-[#d8532e] h-9 xl:h-11 text-l xl:text-xl w-3/4 border-[#f4efe2] border-2"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Suscribir'}
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
