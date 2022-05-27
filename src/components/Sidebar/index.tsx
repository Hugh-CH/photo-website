import React from "react";
import logo from "../../images/logo.svg"
import "../../main.scss"
import Navbar from "../Navbar";

type sidebarProps = {
  currentPage:string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}


const Sidebar: React.FC<sidebarProps> = ({currentPage,setCurrentPage}) => {

  return(
    <nav>
      <div className="sidebarContainer">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="Logo Link"/>
        </div>
        <hr/>
        <div className="title">
          Hugh Hudson
        </div>
        <hr/>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </nav>
  )
}

export default Sidebar
