import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react"
const urlRegistro = 'http://localhost:3000/users'

const FormSignup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const registro = async (e) => {
      e.preventDefault()
      const user = {
        username,
        password
      }
      await axios.post(urlRegistro, user)
      navigate('/')
    }
  return (
    <section className="login-form-container">
        <h1>Registro</h1>
        <form action="" id="login-form">
            <div className="login-inp-cont">
                <input type="text" name="username" id="username" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} value={username}/>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="password" id="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="cpassword" id="cpassword" placeholder="Confirmar contraseña"/>
            </div>
            <input className="signin" type="submit" name="login" id="login" value="Registrarme" onClick={registro}/>
            <Link to="/signin">Iniciar sesión</Link>
        </form>
    </section>
  )
}

export default FormSignup