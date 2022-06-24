export type page = {
  id:string,
  title:string,
  galleryName?:string,
  numberOfImages?:number,
}

export const Pages = {
  home: {id: 'home', title:'Home', galleryName:'home', numberOfImages:8},
  about: {id: 'about', title:'About'},
}

export const Galleries = {
  spain: {id: 'spain', title:'Spain', galleryName:'spain', numberOfImages:10},
  godmanchester: {id: 'godmanchester', title:'Godmanchester', galleryName:'godmanchester', numberOfImages:7},
  forestOfBowland: {id: 'forestOfBowland', title:'Forest of Bowland', galleryName:'forestOfBowland', numberOfImages:8},
  lakeDistrict: {id: 'lakeDistrict', title:'The Lakes'},
}