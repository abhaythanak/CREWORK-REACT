import { useDCart, useSCart } from "../Context/CartContext"
import '../style/Cart.css'

export default function Checkout(){
const items = useSCart();
const dispatch = useDCart();

if (items.length === 0) {
    return (
        <main>
            <h1>Cart is Empty</h1>
        </main>
    )
};

const handleRemove = (index) => {
  dispatch({ type: 'REMOVE', index });
};



 
  return (
    <main className='body'>
      
        <div className='wrapper' >
          {items.map( (product,index) => {
            
            return (
              <div className='project' key={product.id} index={index} >
                 <div className='shop'>
                            <div className="box">
                                <img className="CartImg" src={product.image} alt='E-comme' />
                                <p className="CartName">{product.name} </p>         
                                <p className="CartPrice"> ₹ {product.price}  /-</p>
                                <div className="math">
                                <button className="minus">-</button>
                                <input className="num" type="text" />
                                <button className="plus">+</button>
                                </div>
                                <button className="Remove" onClick={() => handleRemove(index)}>X</button>
                            </div>
                        </div>
                
              </div>
            )
          } )}
        </div>

        
    
      
    </main>
  );
}