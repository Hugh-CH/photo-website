import React from "react";
import {Cloudinary, CloudinaryImage} from "@cloudinary/url-gen";
import GalleryImage from "../GalleryImage";
import "../../main.scss"
import {scale} from "@cloudinary/url-gen/actions/resize";

type GalleryProps = {
  galleryName: string,
  numberOfImages: number,
}

const Gallery: React.FC<GalleryProps> = ({galleryName, numberOfImages}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'hughud'
    }
  });

  let images = [];

  const formatImage = (imageName: string): CloudinaryImage => {
    let image = cld.image(imageName);
    image.quality('auto');
    image.resize(scale().width(1200));
    return image
  }

  for (let i = 1; i <=numberOfImages; i+=2) {
    const leftImageName= galleryName+'/'+i;
    const rightImageName= galleryName+'/'+(i+1);

    const leftImage = formatImage(leftImageName);
    const rightImage = formatImage(rightImageName);


    images.push(
      <div className="galleryRow">
        <GalleryImage key={i} cldImage={leftImage} imageName={leftImageName} />
        <GalleryImage key={i+1} cldImage={rightImage} imageName={rightImageName} />
      </div>);
  }

  return (
    <div className={"gallery"}>
      {images}
    </div>
  )
}

export default Gallery;