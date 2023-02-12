import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react"
const urlRegistro = 'http://localhost:3000/users'

const FormSignup = () => {
  const inputs = document.querySelectorAll('#login-form input')
  const formName = document.getElementById('username')
  const formPass = document.getElementById('password')
  const formCpass = document.getElementById('cpassword')
  const pName = document.getElementById('username-est')
  const pPass = document.getElementById('password-est')
  const pCpass = document.getElementById('cpassword-est')
  const est = document.getElementById('est')
  const lettersNum = /^[a-zA-Z0-9#-\s]{1,30}$/;
  const validation = (e) => {
    switch (e.target.name){
      case "username":
        if (lettersNum.test(e.target.value)) {
          pName.textContent=""
        } else {
          pName.textContent="Solo se permiten numeros y letras."
        }
      break;
      case "password":
        if (lettersNum.test(e.target.value)){
          pPass.textContent=""
        } else {
          pPass.textContent="Solo se permiten numeros y letras."
        }
      break;
      case "cpassword":
        if (formPass.value != formCpass.value){
          pCpass.textContent="Las contraseñas no coinciden"
        } else {
          pCpass.textContent=""
        }
      break;  
    }
  }
  inputs.forEach((input)=>{
    input.addEventListener('keyup', validation);
    input.addEventListener('blur', validation);
  });
  //Registro
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const registro = async (e) => {
      e.preventDefault()
      const user = {
        name,
        password
      }
      if (!lettersNum.test(formName.value, formPass.value) || formPass.value != formCpass.value ){
        e.preventDefault();
        est.textContent="Rellene los campos correctamente"
      } else {
        await axios.post(urlRegistro, user)
        navigate('/')
      }
    }
  return (
    <section className="login-form-container">
        <h1>Registro</h1>
        <form action="" id="login-form">
            <div className="login-inp-cont">
                <input type="text" name="username" id="username" placeholder="Usuario" onChange={(e) => setName(e.target.value)} value={name}/>
                <p id='username-est'></p>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="password" id="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <p id='password-est'></p>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="cpassword" id="cpassword" placeholder="Confirmar contraseña"/>
                <p id='cpassword-est'></p>
            </div>
            <input className="signin" type="submit" name="login" id="login" value="Registrarme" onClick={registro}/>
            <Link to="/signin">Iniciar sesión</Link>
            <p id='est'></p>
        </form>
    </section>
  )
}

export default FormSignup