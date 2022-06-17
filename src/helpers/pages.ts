export type page = {
  id:string,
  title:string,
  galleryName?:string,
  numberOfImages?:number,
}

export const Pages = {
  home: {id: 'home', title:'Home', galleryName:'home', numberOfImages:5},
  spain: {id: 'spain', title:'Spain', galleryName:'spain', numberOfImages:10},
  godmanchester: {id: 'godmanchester', title:'Godmanchester', galleryName:'godmanchester', numberOfImages:6},
  forestOfBowland: {id: 'forestOfBowland', title:'Forest of Bowland', galleryName:'forestOfBowland', numberOfImages:8},
  lakeDistrict: {id: 'lakeDistrict', title:'The Lakes'},
  about: {id: 'about', title:'About'},
}
