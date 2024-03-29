
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <UserContextProvider>
      <h1>hello world!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
