import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Login from './components/Login'
import Signup from './components/Signup'
import {Route ,Routes} from "react-router-dom"
import Cards from "./components/Cards"
import { useState,useEffect } from 'react'

const App = () => {
  const [articles,setarticles]=useState([]);
  const[serachitem,setsearchitem]=useState("headlines");
  useEffect(()=>{
   fetchnews(serachitem)
  },[serachitem]
    

  )

  const fetchnews=(query)=>{
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=6466ba1d0bc348fa849412600fdcee05`)
    .then((res)=>{
return res.json()
    }).then((data)=>{
      if(data.articles){
        const newnews=data.articles.filter((data)=>(
data.title&&data.description&&data.url&&data.urlToImage
        ))
        setarticles(newnews)
      }
      
    })

  }
  const handlesearch=(query)=>{
setsearchitem(query);
  }

  return (
    <>
      <Navbar onSearch={handlesearch}/>
      <Routes>
        <Route path="/" element={<div className='cardbox'>
        {articles.map((items,index)=>(<Cards key={items.id} title={items.title} des={items.description} url={items.urlToImage} articleurl={items.url} />))}
      
        </div>}></Route>
      </Routes>
      
      <Routes>
        <Route path="login" element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path="signup" element={<Signup/>}></Route>
      </Routes>
      
    
      
    </>
  )
}

export default App
