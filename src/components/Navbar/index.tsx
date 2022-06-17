import React from "react";
import "../../main.scss"
import {page, Pages} from "../../helpers/pages";

type navbarProps = {
  currentPage:page;
  setCurrentPage:  React.Dispatch<React.SetStateAction<page>>;
}

const Navbar: React.FC<navbarProps> =({currentPage, setCurrentPage}) => {


  let buttons = [];
  let k: keyof typeof Pages;
  for (k in Pages){
    const page = Pages[k]
    buttons.push(<button className={currentPage.id===page.id?"majorNavButton--selected":"majorNavButton"} onClick={()=>{setCurrentPage(page)}}>{page.title}</button>)
  }

  return (
    <div className="navBarWrapper">
      {buttons}
    </div>
  )
};

export default Navbar
