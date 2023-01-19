import {BrowserRouter, Routes, Route} from "react-router-dom";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Details from "./Pages/Details";
import BookingForm from "./Pages/BookingForm";
import Dashboard from "./Pages/Dashboard";

function App() {
  return <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path="/details/:modal" element={<Details/>}/>
      <Route path="booking/register" element={<BookingForm/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
}

export default App;
