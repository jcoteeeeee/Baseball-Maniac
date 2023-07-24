import './App.css'  
import {Route, Routes, useNavigate} from 'react-router-dom' 
import Homepage from './components/Homepage.jsx'     
import SignupPage from './components/SignupPage'   

function App() { 
  const navigate = useNavigate() 

  const goToSignup = () => {  
    console.log('click')
    navigate('/signup') 
  }  

  return (
    <>  
      <Routes>
        <Route exact path='/' element={<Homepage goToSignup={goToSignup} />} /> 
        <Route exact path='/signup' element={<SignupPage/>} />   
      </Routes>
    </>
  )
}

export default App
