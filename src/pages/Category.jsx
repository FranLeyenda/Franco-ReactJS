import React, { useEffect, useState } from 'react'
import ItemListComponent from '../components/ItemListComponent/ItemListComponent'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function getProducts() {
  return(axios.get('https://dummyjson.com/products'))
}

const Category = () => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(()=> {
  getProducts()  
    .then((res) => {
        const dataFiltered = res.data.products.filter(item => item.category === categoryId)
        setProducts(dataFiltered);
    })
    .catch((err) => {});
  }, [categoryId])

  return <ItemListComponent productsData={products}/>
}

export default Category