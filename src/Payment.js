import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
function Payment() {
  const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className='payment'>
        <div className='payment_Container'>
            <h1>
            Checkout (
                <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>
                {/* Payment section - Delivery Address */ }
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>80 F Block</p>
                        <p>Sri Ganganagar</p>
                    </div>
                </div>
                

                {/* Payment section - Item Review */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Payment section - Payment Method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        <h1>yo</h1>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Payment



