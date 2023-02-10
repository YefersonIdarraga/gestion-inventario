import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header>
            <section className="menu-container">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="views-container">
                    <NavLink className="view" to="/">Inicio</NavLink>
                </div>
                <div className="log-container">
                    <NavLink className="log" to="/signin">Iniciar sesión</NavLink>
                    <NavLink className="log" to="/signup">Registrar operario</NavLink>
                </div>
            </section>
        </header>
    )
}

export default Header