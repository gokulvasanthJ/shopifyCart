import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  let [cartValue,setCartValue]=useState(0);
  return <>
  <Navbar cartValue={cartValue}/>
  <Header/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xlName-4 justify-content-center">
                <Card setCartValue={setCartValue}/>
                <Card setCartValue={setCartValue}/> 
                <Card setCartValue={setCartValue}/> 
                <Card setCartValue={setCartValue}/> 
                <Card setCartValue={setCartValue}/> 
                <Card setCartValue={setCartValue}/> 
                <Card setCartValue={setCartValue}/> 
                <Card setCartValue={setCartValue}/>                 
                </div>
            </div>
  </section>  
  
  </>
}

export default App;
