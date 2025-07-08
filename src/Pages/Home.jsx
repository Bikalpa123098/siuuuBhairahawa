import React from "react";
import Navbar from "../Components/Navigation/Toolbar";
import About from "./About";
import Banner from "../Components/UI/Banner";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigation = useNavigate()
  const transfer=()=>{
    navigation('/about')
  }
  return (
    <div>
      <h2 className='text-4xl font-extrabold text-red-950'>  Home is the place we live</h2>
      <button className="p-4 border-2 rounded-2xl border-red-900" onClick={()=>{
        transfer()
      }}>About me me</button>
     <Banner title="Home" age="20"  subtitle="Subtitle of home " description="It is description of home"/>
    </div>
  );
}
 
export default Home;

//https://coolors.co/673c4f-7f557d-726e97-7698b3-83b5d1
//https://coolors.co/673c4f-7f557d-726e97-7698b3-83b5d1
