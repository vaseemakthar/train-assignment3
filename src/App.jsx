// import {component} from React;
// import './App.css'
// import Form from "./Form.jsx";
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import List from './List.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hooks from './Hooks.jsx';
import Hen from './Hen.jsx';
import React, { createContext , useState } from 'react';

export let nameContext = createContext();

function App() {

   let [color,setColor]=useState("black");
   let [bg,setBg]=useState("white");

   function change()
   {
      setColor(color === "black" ? "white" : "black")
      setBg(bg === "white" ? "black" : "white")  
   }
   
  return (
   <>
      
       <nameContext.Provider value={{color,bg}}>
            <Hen />
            <button onClick={change}>click</button>
       </nameContext.Provider>
       
       </> 
  )
}

export default App;
