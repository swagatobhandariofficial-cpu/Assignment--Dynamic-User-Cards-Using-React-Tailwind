import React, { useState } from 'react'

const App = () => {
  const [FName, setFName] = useState('')
  const [LName, setLNName] = useState('')
  const [Designation, setDesignation] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [bio, setBio] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  const [allUsers, setAllUsers] = useState(localData)
  const submitHandler = function (e) {

    e.preventDefault()

    const oldUsers = [...allUsers]
    oldUsers.push({ FName, LName, Designation, imageURL, bio })

    setAllUsers(oldUsers)
    localStorage.setItem('all-users', JSON.stringify(oldUsers))
    setFName('')
    setLNName('')
    setDesignation('')
    setimageURL('')
    setBio('')
  }
  const dltHandler = (idx) => {
    const dltuser = [...allUsers]
    dltuser.splice(idx, 1)
    setAllUsers(dltuser)
    localStorage.setItem('all-users', JSON.stringify(dltuser))

  }


  return (
    <div className='min-h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='p-5 flex flex-wrap justify-center items-center'>
        <input
          value={FName}
          onChange={(e) => {
            setFName(e.target.value)
          }}
          className='py-4 px-5 lg:w-[45%] font-semibold border-2 m-2 rounded-xl'
          type="text"
          placeholder='Enter your first name'
          required
        />
        <input
          value={LName}
          onChange={(e) => {
            setLNName(e.target.value)
          }}
          className='py-4 px-5 lg:w-[45%] font-semibold border-2 m-2 rounded-xl'
          type="text"
          placeholder='Enter your last name'
          required
        />
        <input
          value={Designation}
          onChange={(e) => {
            setDesignation(e.target.value)
          }}
          className='py-4 px-5 lg:w-[45%] font-semibold border-2 m-2 rounded-xl'
          type="text"
          placeholder='Enter your Designation'
          required
        />
        <input
          value={imageURL}
          onChange={(e) => {
            setimageURL(e.target.value)
          }}
          className='py-4 px-5 lg:w-[45%] font-semibold border-2 m-2 rounded-xl'
          type="text"
          placeholder='Enter imageURL'
          required
        />
        <textarea
          value={bio}
          onChange={(e) => {
            setBio(e.target.value)
          }}
          className='py-4 px-5 w-[59%] font-semibold border-2 m-2 rounded-xl'
          type="text"
          placeholder="Enter Bio"
          required ></textarea>

        <button
          className='px-3 py-3 bg-indigo-600 rounded-xl w-[40%] mt-4 active:scale-95'>
          Submit
        </button>
      </form>



      <div className='p-5 flex flex-wrap gap-3'>

        {allUsers.map((elm, idx) => {
          return (
            <div key={idx} className="w-[48vw] lg:w-[20vw] md:w-[35vw] sm:w-[35vw] rounded-xl text-center flex flex-col items-center justify-center px-8 py-6 bg-white text-black">

              <img
                className="h-24 w-24 rounded-full object-cover"
                src={elm.imageURL}
                alt=""
              />

              <h1 className='text-xl font-semibold'>
                {elm.FName} {elm.LName}
              </h1>

              <h5 className='text-blue-500 font-semibold text-base mt-0.5 mb-2'>
                {elm.Designation}
              </h5>

              <p className='text-sm font-medium leading-tight opacity-80'>
                {elm.bio}
              </p>

              <button
                onClick={() => dltHandler(idx)}
                className='my-2.5 px-4 py-2 rounded cursor-pointer active:scale-95 bg-red-500 text-white'>Remove</button>


            </div>
          )
        })}

      </div>

    </div>
  )
}

export default App