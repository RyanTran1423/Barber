import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className = 'navbar'>
            <div className='navbar-logo'>
                J n buhShane website
            </div>
            <ul className='navbar-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to= "/work">Work</Link></li>

            </ul>
        </div>
    )
}
export default Navbar