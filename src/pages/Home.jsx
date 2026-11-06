import {useState} from "react";
import Boton from "../components/Boton";
import Modal from "../components/Modal"
function Home(){
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
            <h1>Home</h1>
            <Boton funcion={mostrarModal}>Mostrar</Boton>

            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu mensaje fue enviado</p>
                    <Boton funcion={cerrarModal}>Aceptar</Boton>
                </Modal>
            )}
        </main>
    )

}

export default Home;