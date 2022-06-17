import React from "react";
import Sidebar from "../Sidebar";
import "../../main.scss"
import {page} from "../../helpers/pages";

type layoutProps = {
    children?: React.ReactNode;
    currentPage:page;
    setCurrentPage:  React.Dispatch<React.SetStateAction<page>>;
}

const Layout: React.FC<layoutProps> = ({children,currentPage,setCurrentPage}) => {
    return (
        <div className="pageWrapper">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <body>
                <div className="bodyWrapper">
                    {children}
                </div>
            </body>
        </div>
    )
};

export default Layout