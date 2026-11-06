function Boton({children, funcion}){
    return(
        <button onClick={funcion}>{children}</button>
    );
}

export default Boton;