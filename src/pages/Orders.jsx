import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency, cartItems } = useContext(ShopContext);

  // Extract items from cart and map them to product data
  const orderItems = [];
  for (const item in cartItems) {
    for (const size in cartItems[item]) {
      if (cartItems[item][size] > 0) {
        const product = products.find((product) => product._id === item);
        if (product) {
          orderItems.push({
            product: product,
            size: size,
            quantity: cartItems[item][size],
          });
        }
      }
    }
  }

  return (
    <div className='max-w-[1200px] mx-auto border-t pt-16 mb-20 px-4'>
        
        <div className='text-2xl'>
            <Title 
              text1={'MY'}
              text2={'ORDERS'}
            />
        </div>

        <div>
            {
              orderItems.length > 0 ? orderItems.map((order, index) => (
                <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='flex items-start gap-6 text-sm'>
                      <img className='w-16 sm:w-20' src={order.product.image[0]} />
                      <div>
                        <p className='sm:text-base font-medium'>{order.product.name}</p>
                        <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                          <p className='text-lg'>{currency}{order.product.price}</p>
                          <p>Quantity: {order.quantity}</p>
                          <p>Size: {order.size}</p>
                        </div>
                        <p className='mt-2'>Date: <span className='text-gray-400'>12, Jan, 2025</span></p>
                      </div>
                    </div>
                    <div className='md:w-1/2 flex justify-between'>
                      <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm md:text-base'>Ready to ship</p>
                      </div>
                      <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                    </div>
                </div>
              )) : (
                <p>No items in your order.</p>
              )
            }
        </div>

    </div>
  )
}

export default Orders;
