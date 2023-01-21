

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { CartPage } from '../Body/Cartpage'
import { HomePage } from '../Body/HomePage'
import { Products } from '../Body/ProductPage'
import {ProductDetail} from '../Body/SingelProDetailsPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/:id" element={<ProductDetail/>}></Route>
        </Routes>
    </div>
  )
}
