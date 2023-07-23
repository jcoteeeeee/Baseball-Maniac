import './App.css'  
import {Route, Routes} from 'react-router-dom' 
import Homepage from './components/Homepage.jsx'     
import SignupPage from './components/SignupPage'   

function App() {
  return (
    <>  
      <Routes>
        <Route exact path='/' element={<Homepage/>} /> 
        <Route exact path='/signup' element={<SignupPage/>} />   
      </Routes>
    </>
  )
}

export default App
