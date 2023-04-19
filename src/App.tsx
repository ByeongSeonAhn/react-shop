import {BrowserRouter, Routes, Route} from "react-router-dom";
import './assets/css/tailwind.css';
import './assets/css/style.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import Error from './views/Error';
import Index from './views/Index';
import Products from './views/Products';
import Fashion from './views/Fashion';
import Cart from './views/Cart';
import Accessory from './views/Accessory';
import Digital from './views/Digital';
import {ScrollToTop} from "./util/helpers";
import {useRef} from 'react';
import {useCartLoad} from "./composables/useCartLoad";

const App = (): JSX.Element =>  {
  const $hamburger = useRef<HTMLInputElement>(null);
  const closeOverlay = () => {
      $hamburger?.current?.click();
  }
  //장바구니 상태 로드
  useCartLoad();
  return (
      //Link: 라우팅 경로 지정
      <BrowserRouter>
          <ScrollToTop />
          <input type='checkbox' id='side-menu' className='drawer-toggle' ref={$hamburger}/>
          <section className='drawer-content'>
              <Nav/>
              <section className='main pt-16'>
                  <Routes>
                      <Route path='*' element={<Error />} />
                      <Route path='/' element={<Index />} />
                      <Route path='/product/:id' element={<Products />} />
                      <Route path='/cart' element={<Cart />} />
                      <Route path='/fashion' element={<Fashion />} />
                      <Route path='/accessory' element={<Accessory />} />
                      <Route path='/digital' element={<Digital />} />
                  </Routes>
              </section>
              <Footer />
          </section>

          <Drawer closeOverlay={closeOverlay}/>
      </BrowserRouter>
  );
}

export default App
