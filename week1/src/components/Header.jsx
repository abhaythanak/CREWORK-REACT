import { Link } from "react-router-dom";
import '../style/header.css';
export default function Header() {
    return(
        <header>
            <div className="container">
                <div className="container1">
                    <div className="logo">
                        <Link to='/' className='brand'>Osiris Products</Link>
                    </div>
                    <div>
                        <Link to='/' className='nav-gap' >Home</Link>
                        <Link to='about' className='nav-gap' >About</Link>
                        <Link to='products' className='nav-gap' >Shopping</Link>
                        <Link to='post' className='nav-gap' >Post</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}