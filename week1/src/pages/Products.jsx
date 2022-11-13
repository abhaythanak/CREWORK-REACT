

import { Link } from 'react-router-dom'
import PRODUCTS from '../data.js'
import '../style/product.css';

const Component = () => {
  
  return (
    <main>
      
      <div className="pg-header">
        <div className="container">
          <div className="center">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="section">
          {PRODUCTS.map( (product) => {
            
            return (
              <div className="" key={product.id}>
                
                <div className="cards">
                  <div className="imageBox">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="detail">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <div className="">
                      <span>Price: <strong className="price">{product.price}</strong></span><br/>
                      <button className='btn bg-green-500'>Buy</button>
                      <Link to={`/products/${product.id}`} ><button className="btn1  bg-blue-400">DETAILS &#8594;</button></Link>
                      
                    </div>
                  </div>
                </div>

              </div>
            )
          } )}
        </div>
      </div>

    </main>
  )
}

export default Component
