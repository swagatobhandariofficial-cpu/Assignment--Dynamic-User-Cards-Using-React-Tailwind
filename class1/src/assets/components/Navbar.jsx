import React from 'react'

const Navbar = (prop) => {
  // console.log(prop);

  return (
    <div className='bg-emerald-700 h-20 p-4 rounded-2xl m-2 '>
      <h1 className='text-4xl font-serif'>{prop.user}</h1>
    </div>
  )
}

export default Navbar