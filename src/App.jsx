import react, { useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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
//ItemListComponent
import ItemListComponent from './components/ItemListComponent/ItemListComponent';
//Home
import Home from './pages/Home';
//ArrayComponent
import ArrayComponent from './components/ArrayComponent/ArrayComponent';
//MainRouter
import MainRouter from './routes/MainRouter';

function App() {

  return (
    <MainLayout>
      <MainRouter />
    </MainLayout>
  )
}

export default App
