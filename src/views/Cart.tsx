import CartView from "../components/CartView";

//[장바구니]
const Cart = (): JSX.Element => {
    return (
        <section className='pt-4 lg:pt-5 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
            <CartView />
        </section>
    )
};

export default Cart;
