import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div >
      <div className="box ">{num}</div>
      <button className='bg-blue-700 rounded-sm' onClick={()=>{
        const rend = Math.floor(Math.random()*100)
        setNum(rend)
      }}>Change Number</button>
    </div>
  )
}

export default App