import { Link } from "react-router-dom"
import '../style/Header.css'
import { useSCart } from "../Context/CartContext"


export default function Header() {
const items = useSCart(); 
    
    
    return(
        <header>
        <div className="container">
            <div className="container1">
                <div className="logo">
                    <Link to='/' className='brand'>NiLeO</Link>
                </div>
                <div className="allNav">
                    <Link to='/' className='nav' >Home</Link>
                   
                    <Link to='product' className='nav' >Shopping</Link>
                    <Link to='checkout' className='nav' id="cart" >🛒</Link>
                    <span className='nav1'>{items.length}</span>
                </div>
            </div>
        </div>
    </header>
    )
};