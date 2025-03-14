import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const AppLayout = () => {

  useEffect(function(){
    if(localStorage.getItem("dark") === null){
      localStorage.setItem("dark", "false")
    }
  }, [])

  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "true")

  const handleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("dark", newDarkMode ? "true" : "false")
  }

  return (
    <div className={darkMode ? "dark": ""}>
      <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
        <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;