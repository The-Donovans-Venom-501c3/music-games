import './assets/scss/App.scss'
import Navbar from './components/Navbar/Navbar'
import Loading from './pages/Quiz/Loading/Loading'
import Welcome from './pages/Welcome/Welcome'

function App() {

  return (
    <>
    <Navbar />
    {/* <Welcome /> */}
    <Loading />
    </>
  )
}

export default App
