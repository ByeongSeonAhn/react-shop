import {selector} from "recoil";

 // const productsURL = 'C:/zerobase/react-shop/src/assets/products.json';
const productsURL = 'https://fakestoreapi.com/products';


interface Rating {
    rate?: 0;
    count?: 0;
}

export interface Product {
    id: number;
    title: string;
    description:string;
    category: string;
    price: number;
    image: string;
    rating: Rating;
}

//[제품리스트]
export const productsList = selector<Product[]> ({
    key: 'productsLit',
    get: async () => {
        try{
            const response = await fetch(productsURL);
            return (await response.json()) || [];
        }catch (error) {
            console.log(`Error: \n${error}`);
            return [];
        }
    }
})