import React from "react";
import Sidebar from "../Sidebar";
import "./styles.css"
type layoutProps = {
    children?: React.ReactNode;
    currentPage:string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
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