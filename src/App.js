import {useState} from "react"
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Progress from "./Progress";
import Experience from "./Experience";


function App() {
 
  return (
    <div className="App">
     
       <Home />
       <About />
       <Progress />
       <Experience/>
       <Contact />
       <Footer />
       
    </div>
  );
}

export default App;
