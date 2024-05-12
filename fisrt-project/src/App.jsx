import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componet/Home/Home'
import Contact from './componet/Contact/Contact'
import Portfolio from './componet/Portfolio/Portfolio'
import About from './componet/About/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './componet/Layout/Layout'

let router = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>},
    {path:'about' , element:<About/>},
  ]}
])

function App() {

  return <RouterProvider router={router}></RouterProvider>
    
  
}

export default App
