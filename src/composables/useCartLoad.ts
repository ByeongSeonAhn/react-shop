import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {cartState} from '../store/cart';

export const CART_ITEM = 'CART_ITEM';

//[장바구니 상태저장 로직]
export const useCartLoad = () => {
  const cartStore = useRecoilValue(cartState);
  const setCartData = () => {
    localStorage.setItem(CART_ITEM, JSON.stringify(cartStore));
  };
  useEffect(() => {
      setCartData();
  }, [cartStore])
};

