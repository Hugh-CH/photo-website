import React from "react";
import "../../main.scss"

type navbarProps = {
  currentPage:string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<navbarProps> =({currentPage, setCurrentPage}) => {
  return (
    <div className="navBarWrapper">
      <button className={currentPage==='home'?"majorNavButton--selected":"majorNavButton"} onClick={()=>{setCurrentPage('home')}}>Home</button>
      <button className={currentPage==='spain'?"majorNavButton--selected":"majorNavButton"} onClick={()=>{setCurrentPage('spain')}}>Spain</button>
      <button className={currentPage==='about'?"majorNavButton--selected":"majorNavButton"} onClick={()=>{setCurrentPage('about')}}>About</button>
    </div>
  )
};

export default Navbar
