import '../style/home.css';

export default function Home() {
    return (
        <div className='home'>
            <div className="header">
                <div className="container">
                    <h1 className=' italic'>welcome to Osiris Products</h1>
                </div>
            </div>
            <div className="contentHome">
            <div className='img cursor-pointer'>
                <div className='img1  '><img src='./home/product1.png'/>
                <p>Stay Home and Shop Online</p>
                </div>
                <div className='img2  '><img src='./home/product2.png'/>
                <p>Easy transaction without any Additional Charges</p>
                </div>
                <div className='img3 '><img src='./home/product3.png'/>
                <p>Fastest product Delivery to Our Customers</p>
                </div>
                <div className='img4 '><img src='./home/product4.png'/>
                <p></p>
                </div>
                <div className='img6 '><img src='./home/product6.png'/>
                <p>Easy to Buy Our Sell <br/> Start Your Business  </p>
                </div>
                </div>
            
            </div>
        </div>
    )
    
};
