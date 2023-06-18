import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactUs from "./Componenet.js/ContactUs";
import GetContact from "./Componenet.js/GetContact";
import Tax from "./Componenet.js/Tax";
import Navbar from "./Componenet.js/Navbar";
import WaterBill from "./Componenet.js/WaterBill";
import MeetingInfo from "./Componenet.js/MeetingInfo";
import MeetingDetail from "./Componenet.js/MeetingDetail";
import Suggestion from "./Componenet.js/Suggestion";
import Home from "./Componenet.js/Home";
import RealHome from "./Componenet.js/RealHome";
import BasicExample from "./Componenet.js/BasicExample";
import Donation from "./Componenet.js/Donation";


function App()
{
  return(
    <>
      <BrowserRouter>
        
        <Navbar/>
        <Routes>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/Registration" element={<BasicExample/>}/>
          <Route path="/Tax" element={<Tax/>}/>
          <Route path="/WaterBill" element={<WaterBill/>}/>
          <Route path="/MeetingInfo" element={<MeetingInfo/>}/>
          <Route path="/MeetingDetail" element={<MeetingDetail/>}/>
          <Route path="/Suggestion" element={<Suggestion/>}/>
          <Route path="/Login" element={<Home/>}/>
          <Route path="/RealHome" element={<RealHome/>}/>
          <Route path="/Donation" element={<Donation/>}/>


        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
