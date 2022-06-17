import React from "react";
import "../../main.scss"
import {CloudinaryImage} from "@cloudinary/url-gen";
import {AdvancedImage} from "@cloudinary/react";


const GalleryImage:React.FC<{cldImage: CloudinaryImage,lazyLoad?: boolean}> = ({cldImage, lazyLoad= false}) => {
    return (
        <div className="galleryImageWrapper">
          <AdvancedImage className={"galleryImage"} cldImg={cldImage} lazyload={lazyLoad.toString()}/>
        </div>
    )
}

export default GalleryImage;