import React, {useEffect, useState} from "react";
import "../../main.scss"
import {CloudinaryImage} from "@cloudinary/url-gen";
import {AdvancedImage, lazyload, responsive} from "@cloudinary/react";

type ImageData = {
  bytes: number;
  format: string;
  height: number;
  width: number;
}

const GalleryImage:React.FC<{cldImage: CloudinaryImage, imageName: string}> = ({cldImage,imageName}) => {
  const [imageData, setImageData] = useState<ImageData|undefined>();

  useEffect(() => {
    const  getImageData = async () => {
      const url = 'https://res.cloudinary.com/hughud/image/upload/fl_getinfo/v1/'+imageName;
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setImageData(jsonResponse.output);
      } catch (error) {
        console.warn('Missing data for image', imageName, error);
      }
    }
    getImageData();
  }, [imageName])

  const aspectRatio = imageData && imageData.width/imageData.height

  return (
    <div className="galleryImageWrapper" style={imageData && {flex:aspectRatio}}>
      <AdvancedImage className={"galleryImage"} cldImg={cldImage} plugins={[lazyload(), responsive({steps: 200})]}/>
    </div>
  )
}

export default GalleryImage;