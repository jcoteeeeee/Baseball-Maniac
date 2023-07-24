import './App.css'  
import {Route, Routes, useNavigate} from 'react-router-dom' 
import Homepage from './components/Homepage.jsx'     
import SignupPage from './components/SignupPage'   
import LoginPage from './components/LoginPage' 
import UserProfilePage from './components/UserProfilePage'    
import AddGamePage from './components/AddGamePage'

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

  const goToProfilePage = () => {
    console.log('click')
    navigate('/userprofilepage')
  }  

  const goToAddGamePage = () => {
    navigate('addgamepage') 
  }

  console.log(typeof(goToProfilePage)) 

  return (
    <>  
      <Routes>
        <Route exact path='/' element={<Homepage goToSignup={goToSignup} goToLogin={goToLogin} />} /> 
        <Route exact path='/signup' element={<SignupPage goToProfilePage={goToProfilePage} />} />   
        <Route exact path='/login' element={<LoginPage goToProfilePage={goToProfilePage} />} />   
        <Route exact path='/userprofilepage' element={<UserProfilePage goToAddGamePage={goToAddGamePage} /> } />   
        <Route exact path='addgamepage' element={<AddGamePage/> } />  
      </Routes>
    </>
  )
}

export default App
