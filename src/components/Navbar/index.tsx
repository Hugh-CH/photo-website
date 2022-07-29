import React, {useState} from "react";
import "../../main.scss"
import {Galleries, page, Pages} from "../../helpers/pages";
import useCollapse from "react-collapsed";

type navbarProps = {
  currentPage:page;
  setCurrentPage:  React.Dispatch<React.SetStateAction<page>>;
}

const Navbar: React.FC<navbarProps> =({currentPage, setCurrentPage}) => {

  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({isExpanded, expandStyles: {opacity: 0.8}, collapseStyles: {opacity: 0.8}});

  let galleryButtons = [];
  let j: keyof typeof Galleries;
  for (j in Galleries){
    const gallery = Galleries[j]
    galleryButtons.push(
      <button className={currentPage.id===gallery.id?"minorNavButton--selected":"minorNavButton"} onClick={()=>{setCurrentPage(gallery)}}>
        {gallery.title}
      </button>)
  }

  return (
    <div className="navBarWrapper">
      <button className={currentPage.id===Pages.home.id?"majorNavButton--selected":"majorNavButton"} onClick={()=>{setCurrentPage(Pages.home)}}>
        {Pages.home.title}
      </button>


      <div className="galleryButtonsWrapper">
        <button
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          className={"majorNavButton"}>
          {'Galleries'}
        </button>

        <div {...getCollapseProps()} className="expandableContainer">
          <hr className="narrowDivider"/>
          {galleryButtons}
          <hr className="narrowDivider"/>
        </div>
      </div>

      <button className={currentPage.id===Pages.about.id?"majorNavButton--selected":"majorNavButton"} onClick={()=>{setCurrentPage(Pages.about)}}>
        {Pages.about.title}
      </button>
    </div>
  )
};

export default Navbar
