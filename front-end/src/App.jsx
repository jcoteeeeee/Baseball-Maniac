import './App.css'  
import {Route, Routes, useNavigate} from 'react-router-dom' 
import Homepage from './components/Homepage.jsx'     
import SignupPage from './components/SignupPage'   
import LoginPage from './components/LoginPage' 

function App() { 
  const navigate = useNavigate() 

  const goToSignup = () => {  
    console.log('click')
    navigate('/signup') 
  }  

  const goToLogin = () => {
    console.log('click') 
    navigate('/login')
  }

  return (
    <>  
      <Routes>
        <Route exact path='/' element={<Homepage goToSignup={goToSignup} goToLogin={goToLogin} />} /> 
        <Route exact path='/signup' element={<SignupPage/>} />   
        <Route exact path='login' element={<LoginPage/>} /> 
      </Routes>
    </>
  )
}

export default App
