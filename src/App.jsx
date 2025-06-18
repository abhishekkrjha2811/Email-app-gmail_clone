import './App.css'
import Nabvar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
      <Nabvar />
      <Sidebar/>
    </div>
  )
}

export default App
