import React from "react";
import {Cloudinary} from "@cloudinary/url-gen";
import GalleryImage from "../GalleryImage";
import "../../main.scss"


const Gallery: React.FC = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'hughud'
    }
  });

  const galleryName = 'spain'

  let firstColumn = [];
  let secondColumn = [];

  for (let i = 1; i < 10; i++) {
    let imageName = galleryName+'/'+galleryName+'_'+i;
    let image = cld.image(imageName);
    i & 1 ? (
      firstColumn.push(<GalleryImage cldImage={image} />)
      ):(
      secondColumn.push(<GalleryImage cldImage={image} />)
      );
  }

  return (
    <div className={"gallery"}>
      <div className="column">
        {firstColumn}
      </div>
      <div className="column">
        {secondColumn}
      </div>
    </div>
  )
}

export default Gallery;