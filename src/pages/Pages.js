import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import {Route,Routes,useLocation} from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import NoPage from './NoPage'

function Pages() {
  
  //useLocation ile kullanıcının redirect olmasını istediği sayfanın bilgilerini alıyoruz
  const location=useLocation()
  return (
    
    // AnimatePresence bir Wrapper componentdır. Yok olacak elementin çevresini sarar. 
    // Yani React DOM agacından kaldırılacak elemanların çevresini sarar.
    // Elementler veya Componentler unmount olurken yani yok olurken animasyonlar oluşturabiliriz.

    //exitBeforeEnter verdiğimiz yerin içindeki motion.div lerinin exit animationlarını bitirmesini ve daha sonra gelen animationun sonra başlamasını sağlar.
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
        <Route path="*" element={<NoPage/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default Pages