import React from "react";
import "./styles.css"

type navbarProps = {
  currentPage:string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<navbarProps> =({currentPage, setCurrentPage}) => {
  return (
    <div className="navBarWrapper">
      <button className="majorNavButton" onClick={()=>{setCurrentPage('home')}}>Home</button>
      <button className="majorNavButton" onClick={()=>{setCurrentPage('spain')}}>Spain</button>
      <button className="majorNavButton" onClick={()=>{setCurrentPage('about')}}>About</button>
    </div>
  )
};

export default Navbar
