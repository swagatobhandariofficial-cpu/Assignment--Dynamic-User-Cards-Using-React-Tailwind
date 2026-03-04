import React, { useState } from 'react'

const App = () => {
  const subHand = function (e) {
    e.preventDefault()
    console.log("Submitted");
  }

  const [name, setName] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        subHand(e)
      }} >
        <input type="text" placeholder='Name?' 
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
          
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App