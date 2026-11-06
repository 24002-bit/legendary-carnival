import "./Tarjeta.css"
import "./Boton.jsx"
import "./Modal.jsx"
function Tarjeta({ img, title, desc, children }) {
    

    return (
        <div className="tarjeta">
            <img
                className="imagenTarjeta"
                src={img}
                alt={title}
            />
            <h2>{title}</h2>
            <p>{desc}</p>
            {children}
        </div>
    )
}

export default Tarjeta;