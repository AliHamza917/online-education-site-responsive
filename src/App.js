import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./global/layouts";
import HomePage from "./pages/homepage";
import AboutUsPage from "./pages/about-us"
import CoursesPage from "./pages/courses"
import ContactUsPage from "./pages/contact-us"
import OurServicesPage from "./pages/our-services"




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-us" element = {<AboutUsPage/>} />
          <Route path="courses" element = {<CoursesPage/>} />
          <Route path="contact-us" element = {<ContactUsPage/>} />
          <Route path="our-services" element = {<OurServicesPage/>} />
        </Routes>
        
      </Layout>
   
    </BrowserRouter>
  );
}

export default App;
