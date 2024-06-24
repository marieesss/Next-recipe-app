import { Ingredient, MyIngredient } from "./Ingredient";
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

export interface MainRecipe {
    label: string;
    yield: number;
    cuisineType: string[];
    instructions: string[];
    comments? : string
  }

  export interface MyRecipe extends MainRecipe{
    description : string
    ingredients: MyIngredient[]

  }
  export interface Recipe extends MainRecipe{
    uri: string;
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
    calories: number;
    glycemicIndex: number;
    inflammatoryIndex: number;
    totalCO2Emissions: number;
    co2EmissionsClass: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    totalWeight: number;
    ingredients: Ingredient[];
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
  self?: Link;
  next?: Link;
}
  
export interface Hit {
    recipe: Recipe;
    _links: Links;
  }

  export interface EdamamResponse {
    from: number;
    to: number;
    count : number;
    _links : Links;
    hits: Hit[];
  }