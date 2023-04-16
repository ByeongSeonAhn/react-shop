//중간점검 45분 20초, 45분 25초
import ProductsViewLoad from "./ProductsViewLoad";
import BreadCrumb from "./BreadCrumb";
import {Product, productsList} from "../store/products";
import {Link, useParams} from "react-router-dom";
import Rating from "./Rating";
import {useRecoilState, useRecoilValueLoadable} from "recoil";
import {addToCart, CartState, cartState} from "../store/cart";
import {toCurrencyFormat} from "../helpers/helpers";

const ProductsView = (): JSX.Element => {
    const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
    const products:Product[] = 'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents: [];
    const productParam = useParams();
    const product: Product = products.filter((item) => productParam.id === item.id.toString())[0];
    console.log("product: ", product)
    const [cart, setCart] = useRecoilState<CartState>(cartState);

    const addToCartHandler = (productId: number) => {
        console.log("cart: ", cart)
        console.log("cart: ", productId)
        setCart(addToCart(cart, productId));
    };

    if('loading' === ProductsLoadable.state) {
        console.log("ProductsLoadable.state: ", ProductsLoadable.state)
        return <ProductsViewLoad />;
    }

    return (
       <div>
           <BreadCrumb category={product.category} crumb={product.title} />
           <div className='lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0'>
               <figure className='flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image'>
                   {/*css 수정*/}
                   <img src={product.image} alt={product.title} className='object-contain w-full h-72'/>
               </figure>
               <div className='card-body px-1 lg:px-12'>
                   <h2 className='card-title'>
                       {product.title}
                   </h2>
                   <p>{product.description}</p>
                   <Rating rate={product?.rating?.rate} count={product?.rating?.count} />
                   <p className='mt-2 mb-4 text-3xl'>{toCurrencyFormat(product.price)}</p>
                   <div className='card-actions'>
                       <button className='btn btn-primary' onClick={() => addToCartHandler(product.id)}>
                           장바구니에 담기
                       </button>
                       <Link to='/cart' className='btn btn-outline ml-1'>
                           장바구니로 이동
                       </Link>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default ProductsView;