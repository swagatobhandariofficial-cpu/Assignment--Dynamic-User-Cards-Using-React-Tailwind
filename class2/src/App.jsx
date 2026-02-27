import React, { useState } from 'react'

const App = () => {
  const arr =['Swagato','Disha','Srija','Debanjan','Subham','Badam','Arka','Subrata','Souvik']
  const [name, setName] = useState(0)
  return (
    <div>
      <h1>{arr[name]}</h1>
      <button onClick={()=>{
        if(name>=arr.length -1){
          setName(0)
        }
        else{
          setName(name+1)
        }
      }}>Change Daddy</button>
    </div>
  )
}

export default App