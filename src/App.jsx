import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './companents/Footer/Footer'
import { Header } from './companents/Header/Header'

function App() {
  return (
    <div className="container py-5">
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  )
}

export default App
