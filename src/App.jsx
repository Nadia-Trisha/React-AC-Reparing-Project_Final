import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
// import Layout from './Layout.jsx';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import OurServices from './OurServices.jsx';
import Pages from './Pages.jsx';
import Contact from './Contact.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './Features.jsx';
import Free_Quote from './Free_Quote.jsx';
import OurTeam from './OurTeam.jsx';
import Testimonial from './Testimonial.jsx';
import ErrorPage from './ErrorPage.jsx';
import Our_Product from './Our_Product.jsx';
import OurProduct from '../AC_Repair/pages/OurProduct.jsx';
import UserRegistration from './pages/UserRegistration.jsx';
import UserInsert from './pages/UserInsert.jsx';



function App() {
  
  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<OurServices />} />
          <Route path="pages" element={<Pages />} />
          <Route path="features" element={<Features />} />
          <Route path="quote" element={<Free_Quote />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurProduct/>} />
          <Route path="registration" element={<UserRegistration/>} />
          <Route path="userinsert" element={<UserInsert/>} />

          
          
        </Route>
      </Routes>
    </BrowserRouter>
      
      </div>
      
    </>
  )
}

export default App



