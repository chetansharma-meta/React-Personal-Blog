import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Auth from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BoltLoaderComponent } from './components/Loaders/BoltLoader'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  

  useEffect(() => {
    Auth.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }
    , [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block text-center'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className='min-h-screen flex items-center justify-center'>
       <BoltLoaderComponent />
    </div>
  )
}

export default App
