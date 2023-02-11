import Header from "../helper/Header";
import gestion_inv from "../assets/gestion-inv.png"

const Home = () => {
  return (
    <section className="container">
      <Header />
      <div className="cont home-container">
        <div className="intro">
        <h1>Gestión de Inventario</h1>
        <p>
          Bienvenido a nuestra página de gestión de inventario, donde le
          brindamos una solución eficiente y fácil de usar para administrar sus
          activos. Sabemos lo importante que es mantener un control preciso de
          sus existencias y por eso, hemos desarrollado un sistema que le
          ayudará a llevar un registro detallado de sus productos, ubicaciones y
          movimientos en tiempo real.
        </p>
        <br />
        <img src={gestion_inv} alt="" />
        <br />
        <p>
          Nuestro objetivo es simplificar el proceso de seguimiento y gestión de
          sus inventarios, ahorrarle tiempo y reducir los errores humanos. Con
          nuestra plataforma, podrá realizar una gestión efectiva de sus
          existencias, optimizar sus procesos de compra y venta, y tomar
          decisiones informadas para mejorar su negocio.
        </p>
        <br />
        <p>
          No importa el tamaño de su empresa o el sector al que pertenezca,
          nuestra solución se adapta a sus necesidades y le brinda una
          visibilidad completa y en tiempo real de sus activos.
        </p>
        <br />
        <p>
          Únase a nosotros en la búsqueda de una gestión de inventario más
          eficiente y comience a mejorar su negocio hoy mismo. ¡Estamos aquí
          para ayudarlo!
        </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
