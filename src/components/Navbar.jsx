import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
                <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink>
                <NavLink to="/contacto" className="btn btn-outline-primary">Contacto</NavLink>
                <NavLink to="/nosotros" className="btn btn-outline-primary">Nosotros</NavLink>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
