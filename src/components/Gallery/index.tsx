import React from "react";
import {Cloudinary} from "@cloudinary/url-gen";
import GalleryImage from "../GalleryImage";
import "../../main.scss"
import {scale} from "@cloudinary/url-gen/actions/resize";

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
  let mobileColumn =[];

  for (let i = 1; i <=numberofImages; i++) {
    let imageName = galleryName+'/'+i;
    let image = cld.image(imageName);
    image.quality('auto')
    image.resize(scale().width(1200))
    mobileColumn.push(<GalleryImage key={i} cldImage={image} lazyLoad={i>2} />)
    i & 1 ? (
      firstColumn.push(<GalleryImage key={i} cldImage={image} lazyLoad={i>2} />)
      ):(
      secondColumn.push(<GalleryImage key={i} cldImage={image} lazyLoad={i>2} />)
      );
  }

  const desktopGallery =
    <div className={"desktopGallery"}>
      <div className="column">
        {firstColumn}
      </div>
      <div className="column">
        {secondColumn}
      </div>
    </div>

  const mobileGallery =
    <div className={"mobileGallery"}>
      <div className="column">
        {mobileColumn}
      </div>
    </div>

  return (
    <>
      {mobileGallery}
      {desktopGallery}
    </>
  )
}

export default Gallery;