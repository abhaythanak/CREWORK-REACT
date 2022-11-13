import { Link } from "react-router-dom";
import '../style/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
             <nav className="container2">
                <div className="">
                  <Link to='/' className='nav-gap' >Home</Link>
                  <Link to='about' className='nav-gap' >About</Link>
                  <Link to='products' className='nav-gap' >Shopping</Link>
                  <Link to='post' className='nav-gap' >Post</Link>
                </div>
             </nav> 
             <div className="copyrights">
          &copy; 2022 <Link to="/"> Osiris Products</Link> - All Rights Reserved.
        </div>  
            </div>
        </footer>

    )
    
};
