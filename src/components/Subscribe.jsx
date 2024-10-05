'use client'
import { useState } from 'react'

// Función que realiza el POST a Contentful
const fetchSubscribe = async (name, email) => {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const environmentId = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_CMA_TOKEN;

  const url = `${process.env.NEXT_PUBLIC_API_CONTENTFUL_CMA}/spaces/${spaceId}/environments/${environmentId}/entries`;

  const data = {
    fields: {
      name: {
        'en-US': name,  // Si utilizas múltiples idiomas, asegúrate de ajustarlo según sea necesario
      },
      email: {
        'en-US': email,
      }
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'X-Contentful-Content-Type': 'yucayLovers', // Cambia por el ID del Content Type si es diferente
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error('Detalles del error:', errorDetails);
      throw new Error(`Error creating entry: ${errorDetails.message || response.statusText}`);
    }

    const entry = await response.json();

    // Publicamos la entrada
    const publishUrl = `${url}/${entry.sys.id}/published`;
    const version = entry.sys.version;

    const publishResponse = await fetch(publishUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'X-Contentful-Version': version,
      },
    });

    if (!publishResponse.ok) {
      const publishErrorDetails = await publishResponse.json();
      console.error('Detalles del error de publicación:', publishErrorDetails);
      throw new Error(`Error publishing entry: ${publishErrorDetails.message || publishResponse.statusText}`);
    }

    const publishedEntry = await publishResponse.json();

    return publishedEntry;
  } catch (error) {
    console.error('Error creating and publishing entry:', error);
    throw error;
  }
};

function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});

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
      try {
        const subscription = await fetchSubscribe(name, email);
        setName('');
        setEmail('');
      } catch (error) {
        console.error('Error en la suscripción:', error);
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
        >
          Suscribir
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
