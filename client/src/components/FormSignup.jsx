import React from 'react'
import { Link } from 'react-router-dom'

const FormSignup = () => {
  return (
    <section className="login-form-container">
        <h1>Registro</h1>
        <form action="" id="login-form">
            <div className="login-inp-cont">
                <input type="text" name="user" id="user" placeholder="Usuario"/>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="pass" id="pass" placeholder="Contraseña"/>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="pass" id="pass" placeholder="Confirmar contraseña"/>
            </div>
            <input className="signin" type="submit" name="login" id="login" value="Registrarme" />
        </form>
    </section>
  )
}

export default FormSignup