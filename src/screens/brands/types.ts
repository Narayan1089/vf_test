export type TrendingTask = {
    id: string;
    brandLogo: string;
    hero: string;
    title: string;
    time: string;
    dateText: string;
    relative: string;
    location: string;
    isNew?: boolean;
  };
  
  export type Campaign = {
    id: string;
    name: string;
    logo: string;
  };
  

  export type AssignedTask = {
    id: string;
    brand: string;
    // local asset image (replace with your actual files)
    poster: any; // require('...png')
    title: string;
    description: string;
  };