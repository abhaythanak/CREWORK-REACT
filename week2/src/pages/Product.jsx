import '../style/Product.css'
import Data from '../data.js'
import { useDCart } from '../Context/CartContext'



export default function Product({product}) {
  const Dispatch = useDCart();
 
const addToCart = (item) => {
  console.log(item)
  Dispatch({ type:"ADD", item})
}

    return(
        <product className='body'>
        <div className='gallery' >
          {Data.map( (product) => {
            
            return (
              <div className='content' key={product.id}  >
                 <div >
                            <div >
                                <img className="image" src={product.image} alt='E-comme' />
                                <p>{product.name} | {product.category} </p>
                                <p> {product.details} </p>
                                <p> ₹ {product.price} /-</p>
                                <button className='cart' onClick={() => addToCart(product)} >Add To Cart</button>
                            </div>
                        </div>
                
              </div>
            )
          } )}
        </div>

        </product>
    )
};