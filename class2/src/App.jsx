import React, { useState } from 'react'
import Wahroom from './components/Wahroom'

const App = () => {
  const [gender, setGender] = useState('Male')
  function chngGender() {
    if (gender == 'Male') {
      setGender('Female')
    } else if (gender == 'Female') {
      setGender('Others')
    } else {
      setGender('Male')
    }
  }
  return (
    <div className='parent'>
      <h1>Your Gender is: {gender}</h1>
      <button onClick={chngGender}>Change Gender</button>

      <Wahroom user={gender} />
    </div>
  )
}

export default App