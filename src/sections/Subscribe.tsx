const Subscribe = () => {
  return (
    <div className='w-screen h-72'>
      <div className='flex flex-col items-center space-y-5 bg-amber-700 p-8 w-screen'>
        <p className='text-2xl sm:text-4xl font-semibold  text-white'>Get Notified About New Products</p>
        <input type="text" className='w-[550px] rounded-md border-none drop-shadow-2xl hover:scale-110 duration-800 ease-in-out ' placeholder='Write your email...'/>
      </div>
    </div>
  )
}

export default Subscribe
