import React from "react";
import "../../main.scss"


const GalleryImage:React.FC<{rawImage:any, eagerLoad?:boolean}> = ({rawImage,eagerLoad}) => {
    return (
        <div className="galleryImageWrapper">
            <img className="galleryImage" src={rawImage} alt={rawImage} loading={eagerLoad?"eager":"lazy"}/>
        </div>
    )
}

export default GalleryImage;