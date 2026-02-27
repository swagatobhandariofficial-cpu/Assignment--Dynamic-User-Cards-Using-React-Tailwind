import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  return (
    <div className='p-6'>
      <h1 className='text-2xl'>{num}</h1>
      <button onClick={() => {
        setnum(num + 10)
      }}
        className='active:scale-97 bg-orange-700 text-white px-3 py-1.5 m-1 font-bold text-xl rounded-2xl'>Add Num</button>

        <button onClick={() => {
        setnum(num - 10)
      }}
        className='active:scale-97 bg-orange-700 text-white px-3 py-1.5 m-1 font-bold text-xl rounded-2xl'>Decrease Num</button>
    </div>
  )
}

export default App