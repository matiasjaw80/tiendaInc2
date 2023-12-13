import logo from '../../assets/logo.svg'
import CartWidget from "../CartWidget/CartWitget"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link class='logo' to='/'><img src={logo} /></Link>
                <section>
                    <Link class='btn' to='/'>Todas</Link>
                    <Link class='btn' to='/category/abrigos'>Abrigos</Link>
                    <Link class='btn' to='/category/remeras'>Remeras</Link>
                    <Link class='btn' to='/category/pantalones'>Pantalones</Link>
                </section>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar