export interface Ingredient{
    quantity : number
    measure : string
    food : string
    foodId: string
    }

export interface EdamamIngredient extends Ingredient{
    text : string
    weight : number
    }


export interface MyIngredient extends Ingredient{
    foodImgUrl : string
    }

export interface MyIngredientRequest extends MyIngredient{
        foodImgUrl : string
}