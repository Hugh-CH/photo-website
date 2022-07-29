export type page = {
  id:string,
  title:string,
  galleryName?:string,
  numberOfImages?:number,
}

export const Pages = {
  home: {id: 'home', title:'Home', galleryName:'home', numberOfImages:16},
  about: {id: 'about', title:'About'},
}

export const Galleries = {
  lakeDistrict: {id: 'lakeDistrict', title:'Lake District', galleryName:'lakes', numberOfImages:10},
  mountains: {id: 'mountains', title:'Mountains', galleryName:'mountains', numberOfImages:20},
  forestOfBowland: {id: 'forestOfBowland', title:'Lancaster', galleryName:'forestOfBowland', numberOfImages:8},
  spain: {id: 'spain', title:'Spain', galleryName:'spain', numberOfImages:9},
  godmanchester: {id: 'godmanchester', title:'The Fens', galleryName:'godmanchester', numberOfImages:7},
}