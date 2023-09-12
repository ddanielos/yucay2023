'use client'
import { useState } from 'react'

const fetchSubscribe = (name, email) => {
  return fetch('http://44.212.214.88:1337/api/beerlovers',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      data: {
            Name: name,
            email: email,
      },
    }),
  }).then(res=>res.json())
}



function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});
  //const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if(!name){
      errors.name = 'El nombre es requerido';
      alert('El nombre es requerido')
    } else if(!email){
      errors.email = 'El email es requerido';
      alert('El email es requerido')
    }else if(!/\S+@\S+\.\S+/.test(email)){
      errors.email = 'Email inválido';
      alert('Email inválido')
    }
    setError(errors);
    if(!Object.keys(errors).length){
      const subscription = await fetchSubscribe(name, email)
      setName('')
      setEmail('')
    }
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <section>
          <input className="font-roboto pl-2 text-l xl:text-xl w-3/4 text-gray-700 my-2 h-9 xl:h-11 rounded border-solid border-gray-300 border-2"
            type="text"
            id="name"
            value={name}
            placeholder="Nombre *"
            onChange={(e)=> setName(e.target.value)}
          />
        </section>
        <section>
          <input className="font-roboto pl-2 text-l xl:text-xl w-3/4 text-gray-700 my-2 h-9 xl:h-11 rounded border-solid border-gray-300 border-2"
            type="text"
            id="email"
            value={email}
            placeholder="Email *"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </section>
        <button
          className="my-2 bg-[#d44620] hover:bg-[#d8532e] h-9 xl:h-11 text-l xl:text-xl w-3/4 border-[#f4efe2] border-2"
          type="submit">Suscribir
        </button>
      </form>
    </div>
  )
}

export default Subscribe