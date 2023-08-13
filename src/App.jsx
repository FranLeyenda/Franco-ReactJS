import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//ButtonComponent
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
//NavBarComponent
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
//LineComponent
import LineComponent from './components/LineComponent/LineComponent'

function App() {

  return (
    <div>
      <NavBarComponent/>
      <LineComponent />
      
    </div>
  )
}

export default App
