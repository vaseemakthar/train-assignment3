// import {component} from React;
// import './App.css'
// import Form from "./Form.jsx";
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import List from './List.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hooks from './Hooks.jsx'
import Hen from './Hen.jsx';
function App() {

  return (
    <div>
       {/* <Form/> */}
       {/* <Router>
           <nav>
              <div><h3><Link to="/">VASEEM AKTHAR</Link></h3></div>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">AboutUs</Link></li>
                <li><Link to="/Contact">ContactUs</Link></li>
              </ol>
           </nav>
           <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/About" element={<About/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
           </Routes>
           <footer>
             
              <p>&copy;2024 Vaseem, All Rights Reserved</p>
           </footer>
       </Router> */}
       {/* <List/> */}
       {/* <Hooks/> */}
       <Hen name="water"/>
    </div>
  )
}

export default App
