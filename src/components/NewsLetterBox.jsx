import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Sign up and enjoy 20% off your first purchase!</p>
        <p className='text-gray-400 mt-3'>
            Stay ahead in the world of technology with Gadgety! Be the first to discover our latest arrivals, exclusive offers, and expert 
            tips to enhance your tech experience. Whether you're a gadget enthusiast or looking for the perfect device, our newsletter keeps 
            you informed and inspired. Subscribe now and never miss an update!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input 
                className='w-full sm:flex-1 outline-none'
                type='0email'
                placeholder='Enter your email'
                required
            />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox