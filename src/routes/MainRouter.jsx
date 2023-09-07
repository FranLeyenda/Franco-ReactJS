import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import LineComponent from '../components/LineComponent/LineComponent'
import Category from '../pages/Category'
import ItemDetails from '../pages/ItemDetails'


const MainRouter = () => {
  return (
    <Router>
        <NavBarComponent />
        <LineComponent />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/category/:categoryId" element={<Category />}></Route>
            <Route path="/item/:itemId" element={<ItemDetails />}></Route>
        </Routes>
    </Router>
  )
}

export default MainRouter
