import React from 'react'
import ReactDOM from 'react-dom/client'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { Hero } from './components/Hero/Hero'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/category/:cid' element={<ItemListContainer/>}/>
        <Route path='/:cid/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
