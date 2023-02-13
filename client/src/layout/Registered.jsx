import React from 'react'
import { Link } from 'react-router-dom'

const Registered = () => {
  return (
    <section className='registered'>
        <h1>Registrado satisfactoriamente</h1>
        <p>Puedes seguir explorando la pagina dando click <Link to={'/'}>aquí.</Link></p>
    </section>
  )
}

export default Registered