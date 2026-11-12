import "./Header.css"
import { Link } from "react-router-dom"
import { UserRound } from "lucide-react";
function Header()
{
    return(
        <header>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Productos">Producto</Link>
                <Link to="/Dudas">Dudas</Link>
                <Link to="/Login"><UserRound size={25}/></Link>
            </nav>
        </header>
    )
}

export default Header;