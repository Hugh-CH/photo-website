import React from "react";
import "./styles..css"

const GalleryImage:React.FC<{rawImage:any}> = ({rawImage}) => {
    return (
        <div className="galleryImageWrapper">
            <img className="galleryImage" src={rawImage} alt={rawImage}/>
        </div>
    )
}

export default GalleryImage;