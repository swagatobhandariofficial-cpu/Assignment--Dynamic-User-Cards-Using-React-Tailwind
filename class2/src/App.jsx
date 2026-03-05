import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [allUsers, setAllUsers] = useState(['Swagato'])

  const subHand = function (e) {
    e.preventDefault()

    const newAllUsers = [...allUsers]
    newAllUsers.push(name)

    setAllUsers(newAllUsers)
    setName('')
  }

  return (
    <div>

      <form onSubmit={subHand}>
        <input
          type="text"
          placeholder="Name?"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>Submit</button>
      </form>

      {allUsers.map((user, idx) => {
        return <h2 key={idx}>{user}</h2>
      })}

    </div>
  )
}

export default App