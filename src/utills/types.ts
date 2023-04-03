
export interface Product{
    image:String | any,
    title:String,
    discription:String,
    price:String ,
    itemfind:String| any,
    findname:String,
    user:String,
    menu:String
    _id:Number
}

export type ProductAction={
    type:string;
    payload?:any
}

export type ProductState={
    loading:boolean;
    error:boolean;
    data:Product[]
}

 export type param={
    page?:Number;
    sort?:String | undefined;
    order?:String | undefined;
    filter?:String | undefined;
    limit?:Number
    type?:String
  }

  export  type CartState={
    token:any ;
    loading:boolean;
    error:boolean;
    data:Product[]
}
export type CartAction={
    type:String;
    payload?:any
}