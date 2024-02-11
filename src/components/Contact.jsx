'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_REACT_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_REACT_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_REACT_PUBLIC_KEY;

export default function Contact(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
    .then(response => {
      console.log(response)
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch(error => console.log(error))
  }

  return(
    <div className="m-0 p-[30px]">
      <form className="m-auto md:w-[35%] p-0" onSubmit={handleSubmit}>
        <section>
          <input className="mb-[15px] pl-[7px] h-[45px] w-full border-[1px] border-solid border-[#ccc] rounded-[4px] text-[1.1rem] md:text-[22.5px] font-roboto text-black resize-y"
            type="text"
            name='user_name'
            value={name}
            onChange={(event)=> setName(event.target.value)}
            placeholder="Nombre *"
          />
        </section>
        <section>
          <input className="mb-[15px] pl-[7px] h-[45px] w-full border-[1px] border-solid border-[#ccc] rounded-[4px] text-[1.1rem] md:text-[22.5px] font-roboto text-black resize-y"
            type="email"
            name='user_email'
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            placeholder="Email *"
          />
        </section>
        <section>
          <textarea className="mb-[15px] pl-[7px] h-[250px] w-full border-[1px] border-solid border-[#ccc] rounded-[4px] text-[1.1rem] md:text-[22.5px] font-roboto text-black resize-y"
            id="message"
            name='user_message'
            value={message}
            onChange={(event)=> setMessage(event.target.value)}
            placeholder="Déjanos un mensaje *"
          />
        </section>
        <button className="h-[50px] w-full text-[22.5px] bg-third-color text-[#f4efe2] border-[#f4efe2] hover:bg-third-color hover:cursor-pointer" type="submit">Enviar</button>
      </form>
    </div>
  )
}
