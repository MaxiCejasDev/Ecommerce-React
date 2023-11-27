import React from 'react'
import ReactDOM from 'react-dom/client'
import { BagProvider } from './Context/BagProvider'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { Hero } from './components/Hero/Hero'
import './index.css'
import { initializeFirebase } from './firebase/config'
import { BagContainer } from './components/BagContainer/BagContainer'
import { AllCategory } from './components/AllCategory/AllCategory'
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'



initializeFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <BagProvider>
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/category/:cid' element={<ItemListContainer/>}/>
        <Route path='/:cid/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='/bag' element={<BagContainer/>}/>
        <Route path='/allcategory' element={<AllCategory/>}/>
        <Route path='/featured' element={<FeaturedProducts/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
  </BagProvider>
)
