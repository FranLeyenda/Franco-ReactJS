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
//MainComponent
import CardComponent from './components/CardComponent/CardComponent';
//MainLayout
import MainLayout from './layout/MainLayout';
//CountComponent
import CountComponent from './components/CountComponent/CountComponent';

function App() {

  return (
    <div>
      <MainLayout />
      <CardComponent />
      <CountComponent />
    </div>
  )
}

export default App
