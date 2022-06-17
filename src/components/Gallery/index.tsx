import React from "react";
import {Cloudinary} from "@cloudinary/url-gen";
import GalleryImage from "../GalleryImage";
import "../../main.scss"

type galleryProps = {
  galleryName: string,
  numberofImages: number,
}

const Gallery: React.FC<galleryProps> = ({galleryName, numberofImages}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'hughud'
    }
  });

  let firstColumn = [];
  let secondColumn = [];

  for (let i = 1; i <=numberofImages; i++) {
    let imageName = galleryName+'/'+i;
    let image = cld.image(imageName);
    image.quality('auto')
    i & 1 ? (
      firstColumn.push(<GalleryImage key={i} cldImage={image} lazyLoad={i>4} />)
      ):(
      secondColumn.push(<GalleryImage key={i} cldImage={image} lazyLoad={i>4} />)
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