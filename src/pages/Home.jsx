import React, { useEffect, useState } from 'react'
import ItemListComponent from '../components/ItemListComponent/ItemListComponent'
import axios from 'axios'


function getProducts() {
  return(axios.get('https://dummyjson.com/products'))
}

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
  getProducts()  
    .then((res) => {
      setProducts(res.data.products);
    })
    .catch((err) => {});
  }, [])

  return <ItemListComponent productsData={products}/>
}

export default Home