import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Resources from "./components/Resources/Resources";
import Team from "./components/Team/Team";
import Features from "./components/Features/Features";
import Community from "./components/Community/Community";
import Downloads from "./components/Downloads/Downloads";
import ContactUs from "./components/ContactUs/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/downloads' element={<Downloads/>}/>
          <Route path='/contacts' element={<ContactUs/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
  );
}

export default App;
