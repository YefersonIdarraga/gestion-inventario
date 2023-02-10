import React from 'react'
import FormSignin from '../components/FormSignin'
import Header from '../helper/Header'

const Signin = () => {
  return (
    <section className='container'>
            <Header />
        <section className='cont signin-container'>
            <FormSignin />
        </section>
    </section>
  )
}

export default Signin