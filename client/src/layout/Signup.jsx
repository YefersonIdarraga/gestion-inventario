import React from 'react'
import FormSignup from '../components/FormSignup'
import Header from '../helper/Header'

const Signup = () => {
  return (
    <section className='container'>
        <Header />
        <section className='cont signup-container'>
            <FormSignup />
        </section>
    </section>
  )
}

export default Signup