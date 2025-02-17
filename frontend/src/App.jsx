
//import { Button } from "./components/ui/button"
//import Navbar from "./ui/Navbar"
//import Footer from "./ui/Footer"
import HomePage from "./pages/HomePage"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import DetailPage from "./pages/DetailPage"
import ProfilePage from "./pages/ProfilePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
