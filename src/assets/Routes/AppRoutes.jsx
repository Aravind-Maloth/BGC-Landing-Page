import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Industries from '../Pages/Industries';
import Solutions from '../Pages/solutions';
import ContactUs from '../Pages/ContactUs';
const AppRoutes = () => {
  return (
    <div>
        {/* <h3>App ROuting</h3> */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/industries' element={<Industries/>} />
            <Route path='/solutions' element={<Solutions/>} />
            <Route path="/contactus" element={<ContactUs/>}/>
          </Route>
        </Routes>
      </div>
  )
}

export default AppRoutes

