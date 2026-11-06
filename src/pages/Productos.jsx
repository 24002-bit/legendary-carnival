import {useState} from "react";
import Tarjeta from "../components/Tarjeta";
import Boton from "../components/Boton.jsx"; 
import Modal from "../components/Modal.jsx";
function Productos(){
    const [mostrar, setMostrar] = useState(false);
    
        function cerrarModal(){
            setMostrar(false)
        }
    
        function mostrarModal()
        {
            setMostrar(true)
        }
    return(
        <main>
            <h1>Productos</h1>
            <Tarjeta
                img="/Img/burger.jpg"
                title="Hamburguesa"
                desc="Incluye papas y refresco"
            >
                <Boton funcion={mostrarModal}>Comprar</Boton>

            </Tarjeta>
            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu compra ha sido realizada</p>
                    <Boton funcion={cerrarModal}>Aceptar</Boton>
                </Modal>
            )}

            <h1>Productos</h1>
            <Tarjeta
                img="/Img/hamburguesa.avif"
                title="Hamburguesa"
                desc="Incluye papas y refresco"
            >
                <Boton funcion={mostrarModal}>Comprar</Boton>

            </Tarjeta>
            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu compra ha sido realizada</p>
                    <Boton funcion={cerrarModal}>Aceptar</Boton>
                </Modal>
            )}
        </main>
    )

}

export default Productos;