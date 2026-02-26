
import Men from './components/Men'
import Navbar from './components/Navbar'
import Women from './components/Women'

const App = () => {
  const user1 = {
    name: 'Swagato',
    gender: 'male',
    age: 23
  }
  const user2 = {
    name: 'Disha',
    gender: 'female',
    age: 24
  }
  const user3 = {
    name: 'Tomato',
    gender: 'male',
    age: 10
  }
  return (
    <div className='p-4' >
      {user3.gender == 'male' ? <Men/> : <Women />}
    </div>
  )
}

export default App