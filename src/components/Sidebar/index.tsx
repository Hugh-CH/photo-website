import React from "react";
import logo from "../../images/logo.svg"
import "./styles.css"
import Navbar from "../Navbar";

type sidebarProps = {
    currentPage:string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}


const Sidebar: React.FC<sidebarProps> = ({currentPage,setCurrentPage}) => {

    return(
        <nav>
            <div className="sidebarContainer">
                <div className="headingContainer">
                    <div className="logoContainer">
                        <img className="logo" src={logo} alt="Logo Link"/>
                    </div>
                    <div className="title">
                        Hugh Hudson
                    </div>
                </div>

                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </nav>
    )
}

export default Sidebar
