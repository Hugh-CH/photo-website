import React from "react";
import logo from "../../images/logo.svg"
import "../../main.scss"
import Navbar from "../Navbar";
import {page} from "../../helpers/pages";

type sidebarProps = {
  currentPage:page;
  setCurrentPage:  React.Dispatch<React.SetStateAction<page>>;
}


const Sidebar: React.FC<sidebarProps> = ({currentPage,setCurrentPage}) => {

  return(
      <div className="sidebarContainer">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="Logo Link"/>
        </div>
        <hr />
        <div className="title">
          Hugh Hudson
        </div>
        <hr/>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
  )
}

export default Sidebar
