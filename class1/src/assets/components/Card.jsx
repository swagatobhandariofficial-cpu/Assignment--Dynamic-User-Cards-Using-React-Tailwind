import React from 'react'

const Card = ({elem}) => {
  return (
    <div className='w-80 bg-white rounded-2xl overflow-hidden border-1 border-mauve-200'>

      <div className='h-32'>
        <img src={elem.coverPic} alt=""  className='h-full w-full object-cover'/>
      </div>

      <div className='flex flex-col items-center -mt-12 p-4 bg-white'>
        <img src={elem.profilePic} alt="" className='rounded-full h-26 w-26 border-4 border-white object-cover' />

        <h2 className='text-2xl font-semibold'>{elem.name}</h2>
        <p className='text-lg opacity-80 mb-2 '>{elem.username}</p>

        <p className='text-center h-30 opacity-75 text-oklch(97.1% 0.013 17.38) p-2.5'>{elem.bio}</p>
      </div>

      <div className='text-center w-full flex gap-4 justify-between p-6'>
        <div> 
          <h1 className='text-xl font-semibold'>{elem.posts}</h1>
          <p className='opacity-85'>Media</p>
        </div>

        <div> 
          <h1 className='text-xl font-semibold'>{elem.followers}</h1>
          <p className='opacity-85'>Followers</p>
        </div>

        <div> 
          <h1 className='text-xl font-semibold'>{elem.following}</h1>
          <p className='opacity-85'>Following</p>
        </div>
      </div>

      <div className='text-center w-full flex justify-center gap-8 p-6'>
        <button className='mt-4 px-7 py-2 bg-black text-white rounded-xl'>Follow</button>
        <button className='mt-4 px-7 py-2 rounded-xl bg-blue-700 text-white'>Message</button>
      </div>
        
    </div>
  )
}

export default Card