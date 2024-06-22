import { Ingredient } from "./Ingredient";
export interface ImageInfo {
    url: string;
    width: number;
    height: number;
  }
  
export interface NutrientInfo {
    label: string;
    quantity: number;
    unit: string;
  }
  
export interface DigestEntry {
    label: string;
    tag: string;
    schemaOrgTag: string;
    total: number;
    hasRDI: boolean;
    daily: number;
    unit: string;
    sub?: DigestEntry[];
  }

export interface Recipe {
    uri: string;
    label: string;
    image: string;
    images: {
      THUMBNAIL: ImageInfo;
      SMALL: ImageInfo;
      REGULAR: ImageInfo;
      LARGE: ImageInfo;
    };
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: Ingredient[];
    calories: number;
    glycemicIndex: number;
    inflammatoryIndex: number;
    totalCO2Emissions: number;
    co2EmissionsClass: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    totalWeight: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    instructions: string[];
    tags: string[];
    externalId: string;
    totalNutrients: {
      [key: string]: NutrientInfo;
    };
    totalDaily: {
      [key: string]: NutrientInfo;
    };
    digest: DigestEntry[];
    _links: Links; 
  }
  
  export interface Link {
    href: string;
    title: string;
}

export interface Links {
  self: Link;
  next?: Link;
}
  
export interface Hit {
    recipe: Recipe;
    _links: Links;
  }