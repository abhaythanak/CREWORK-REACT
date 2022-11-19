import { Link } from "react-router-dom";
import '../style/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
             <nav className="container2">
                <div className="">
                  <Link to='/' className='nav' >Home</Link>
                  
                  <Link to='product' className='nav' >Shopping</Link>
                  
                </div>
             </nav> 
             <div className="copyrights">
          &copy; 2022 <Link to="/"></Link> - All Rights Reserved.
        </div>  
            </div>
        </footer>

    )
    
};