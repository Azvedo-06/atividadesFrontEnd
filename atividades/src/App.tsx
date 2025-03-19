import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import NavBarHotel from './trilha03/NavBarHotel';
import HomeHotel from './trilha03/HomeHotel';
import Rooms from './trilha03/Rooms';
import RoomDetails from './trilha03/RoomDetails';
import BookingSuccess from './trilha03/BookingSuccess';

function App() {

  return (
    <BrowserRouter>
      <NavBarHotel/>
      <Routes>
        <Route path='/' element={<HomeHotel />} />
        <Route path='/rooms/:room' element={<Rooms />} />
        <Route path='/roomDetails' element={<RoomDetails />} />
        <Route path='/BookingSuccess' element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
