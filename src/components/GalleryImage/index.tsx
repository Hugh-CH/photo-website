import React from "react";
import "../../main.scss"
import {CloudinaryImage} from "@cloudinary/url-gen";
import {AdvancedImage} from "@cloudinary/react";


const GalleryImage:React.FC<{cldImage: CloudinaryImage}> = ({cldImage}) => {
    return (
        <div className="galleryImageWrapper">
          <AdvancedImage className={"galleryImage"} cldImg={cldImage}/>
        </div>
    )
}

export default GalleryImage;