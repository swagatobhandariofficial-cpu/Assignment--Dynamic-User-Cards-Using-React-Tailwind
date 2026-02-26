
import Men from './components/Men'
import Navbar from './components/Navbar'
import Women from './components/Women'

const App = () => {
  const age=12;
  return (
    <div className='p-4' >
      {age>=18 ? <Men/> : <Women/>}
    </div>
  )
}

export default App