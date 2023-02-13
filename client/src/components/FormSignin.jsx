import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Cookies from 'universal-cookie'

const url = "http://localhost:3000/users/login"
const cookies = new Cookies();


const FormSignin = () => {  
  const [body, setBody] = useState({username: '', password: ''})
  const inputChange = ({target}) => {
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }
  const iniciarSesion = (e) => {
    e.preventDefault()
    axios.post(url, body)
    .then(({data}) => {
      console.log(data)
    })
    .catch(({response}) => {
      console.log(response.data)
    })
  }
  return (
    <section className="login-form-container">
        <h1>Inicio de sesión</h1>
        <form action="" id="login-form" onSubmit={iniciarSesion}>
            <div className="login-inp-cont">
                <input type="text" name="username" id="username" placeholder="Usuario" value={body.username} onChange={inputChange}/>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="password" id="password" placeholder="Contraseña" value={body.password} onChange={inputChange}/>
            </div>
            <input className="signin" type="submit" name="login" id="login" value="Iniciar sesión"/>
            <Link to="/signup">En caso de no tener una cuenta puedes registrarte.</Link>
            <p id="adv"></p>
        </form>
    </section>
  )
}

export default FormSignin