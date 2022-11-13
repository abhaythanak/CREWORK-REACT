import '../style/singleProduct.css';
import { Link, useNavigate , useParams, useLocation } from 'react-router-dom'
import PRODUCTS from '../data.js'

export default function SingleProduct() {
const navigate = useNavigate();
const { productId } = useParams();


const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId))
//console.log(typeof(productId))

const { id, name, price, image, details } = singleProduct
console.log(singleProduct)
    return (
        <main>
          <div className="pg-header">
        <div className="container">
          <div className="center">
            <div className="col-lg-7">
              <h1>{name}</h1>
              
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='containerContent'>
        <div className='row'>
          <div className='colum5'>
          <img src={image}  alt="" className='imgF' />
          </div>
          <div className='colum7'>
            <h2>{name}</h2>
            <p className='price'>{price}</p>
            <p>{details}</p>
            
            <br/>
            <button className='btn' onClick={() => navigate(-1)}>BACK</button>
            <Link to="/products" className='btn'>PRODUCTS</Link>
          </div>
        </div>
      </div>
        </main>
    )
    
};
