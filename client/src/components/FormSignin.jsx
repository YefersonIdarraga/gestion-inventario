import { Link } from "react-router-dom"

const FormSignin = () => {
  return (
    <section className="login-form-container">
        <h1>Inicio de sesión</h1>
        <form action="" id="login-form">
            <div className="login-inp-cont">
                <input type="text" name="user" id="user" placeholder="Usuario"/>
            </div>
            <div className="login-inp-cont">
                <input type="password" name="pass" id="pass" placeholder="Contraseña"/>
            </div>
            <input className="signin" type="submit" name="login" id="login" value="Iniciar sesión" />
            <Link to="/signup">En caso de no tener una cuenta puedes registrarte.</Link>
        </form>
    </section>
  )
}

export default FormSignin