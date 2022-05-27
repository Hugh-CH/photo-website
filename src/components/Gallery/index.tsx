import React from "react";
import a from "../../images/spain/a.jpg"
import b from "../../images/spain/b.jpg"
import c from "../../images/spain/c.jpg"
import d from "../../images/spain/d.jpg"
import e from "../../images/spain/e.jpg"
import f from "../../images/spain/f.jpg"
import g from "../../images/spain/g.jpg"
import GalleryImage from "../GalleryImage";
import "./styles.css"



const Gallery: React.FC = () => {
    return (
        <div className={"gallery"}>
            <div className="column">
                <GalleryImage rawImage={a}/>
                <GalleryImage rawImage={g}/>
                <GalleryImage rawImage={c}/>
                <GalleryImage rawImage={f}/>
            </div>
            <div className="column">
                <GalleryImage rawImage={e}/>
                <GalleryImage rawImage={b}/>
                <GalleryImage rawImage={d}/>
            </div>
        </div>
            )
}

export default Gallery;