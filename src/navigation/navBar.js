import { Link } from "react-router-dom";
import './navBar.css';
const NavBar = () =>{
    return(
    <header className="header">       
         <Link to='/'> <div className="header_logo">TRUCKS ARE AMAZING!</div></Link>
    </header>
    );
}

export default NavBar;