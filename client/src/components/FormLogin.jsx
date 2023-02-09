
const FormLogin = () => {
  return (
    <section>
        <div className="login-form-container">
            <form action="" id="login-form">
                <div className="login-inp-cont">
                    <input type="text" name="user" id="user" placeholder="Usuario"/>
                </div>
                <div className="login-inp-cont">
                    <input type="password" name="pass" id="pass" placeholder="Contraseña"/>
                </div>
                <input type="submit" name="login" id="login" />
            </form>
        </div>
    </section>
  )
}

export default FormLogin