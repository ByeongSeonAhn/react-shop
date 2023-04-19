import {useEffect} from "react";
import {useLocation} from 'react-router-dom';

//[화폐: 달러표시]
const currencyFormat = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
   maximumFractionDigits: 0,
});

//[스크롤 위치]
export const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);
    return null;
}


export const toCurrencyFormat = (value: number) => currencyFormat.format(value);
