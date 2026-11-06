import "./Header.css"
import { Link } from "react-router-dom"
function Header()
{
    return(
        <header>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Productos">Producto</Link>
                <Link to="/Dudas">Dudas</Link>
            </nav>
        </header>
    )
}

export default Header;