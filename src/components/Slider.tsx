import {Carousel} from 'react-responsive-carousel';

const Slider = () : JSX.Element  =>  {
    return (
        <Carousel>
        </Carousel>

        // <div className="carousel-root carousel-container">
        //     <div className="carousel carousel-slider" style="width: 100%;">
        //         <ul className="control-dots">
        //             <li className="dot selected" value="0" role="button" tabIndex="0" aria-label="slide item 1"></li>
        //             <li className="dot" value="1" role="button" tabIndex="0" aria-label="slide item 2"></li>
        //             <li className="dot" value="2" role="button" tabIndex="0" aria-label="slide item 3"></li>
        //         </ul>
        //         <button type="button" aria-label="previous slide / item"
        //                 className="control-arrow control-prev"></button>
        //         <div className="slider-wrapper axis-horizontal">
        //             <ul className="slider animated" style="transform: translate3d(-100%, 0px, 0px); transition-duration: 350ms;">
        //                 <li className="slide previous">
        //                     <div className="carousel-slide">
        //                         <div
        //                             className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
        //                             <h2 className="text-2xl lg:text-4xl font-bold text-white">신선한 식품!</h2><p
        //                             className="my-2 text-white">농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p><a
        //                             className="btn btn-sm lg:btn-md mt-3" href="/grocery">바로가기
        //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20"
        //                                  fill="currentColor">
        //                                 <path fill-rule="evenodd"
        //                                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                       clip-rule="evenodd"></path>
        //                             </svg>
        //                         </a></div>
        //                         <img src="/img_shop_grocery.jpeg" alt="grocery"/>
        //                     </div>
        //                 </li>
        //                 <li className="slide selected">
        //                     <div className="carousel-slide">
        //                         <div
        //                             className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
        //                             <h2 className="text-2xl lg:text-4xl font-bold text-white">물빠진 청바지!</h2><p
        //                             className="my-2 text-white">이제 막 도착한 패션 청바지를 구경해 보세요.</p><a
        //                             className="btn btn-sm lg:btn-md mt-3" href="/fashion">바로가기
        //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20"
        //                                  fill="currentColor">
        //                                 <path fill-rule="evenodd"
        //                                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                       clip-rule="evenodd"></path>
        //                             </svg>
        //                         </a></div>
        //                         <img src="/img_shop_fashion.jpeg" alt="fashion"/>
        //                         </div>
        //                 </li>
        //                 <li className="slide">
        //                     <div className="carousel-slide">
        //                         <div
        //                             className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
        //                             <h2 className="text-2xl lg:text-4xl font-bold text-white">신속한 업무처리!</h2><p
        //                             className="my-2 text-white">다양한 디지털 상품을 둘러보세요.</p><a
        //                             className="btn btn-sm lg:btn-md mt-3" href="/digital">바로가기
        //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20"
        //                                  fill="currentColor">
        //                                 <path fill-rule="evenodd"
        //                                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                       clip-rule="evenodd"></path>
        //                             </svg>
        //                         </a></div>
        //                         <img src="/img_shop_digital.jpeg" alt="digital"/>
        //                     </div>
        //                 </li>
        //                 <li className="slide previous">
        //                     <div className="carousel-slide">
        //                         <div
        //                             className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
        //                             <h2 className="text-2xl lg:text-4xl font-bold text-white">신선한 식품!</h2><p
        //                             className="my-2 text-white">농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p><a
        //                             className="btn btn-sm lg:btn-md mt-3" href="/grocery">바로가기
        //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20"
        //                                  fill="currentColor">
        //                                 <path fill-rule="evenodd"
        //                                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                       clip-rule="evenodd"></path>
        //                             </svg>
        //                         </a></div>
        //                         <img src="/img_shop_grocery.jpeg" alt="grocery"/></div>
        //                 </li>
        //                 <li className="slide selected">
        //                     <div className="carousel-slide">
        //                         <div
        //                             className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
        //                             <h2 className="text-2xl lg:text-4xl font-bold text-white">물빠진 청바지!</h2><p
        //                             className="my-2 text-white">이제 막 도착한 패션 청바지를 구경해 보세요.</p><a
        //                             className="btn btn-sm lg:btn-md mt-3" href="/fashion">바로가기
        //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20"
        //                                  fill="currentColor">
        //                                 <path fill-rule="evenodd"
        //                                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                       clip-rule="evenodd"></path>
        //                             </svg>
        //                         </a></div>
        //                         <img src="/img_shop_fashion.jpeg" alt="fashion"/>
        //                     </div>
        //                 </li>
        //             </ul>
        //         </div>
        //         <button type="button" aria-label="next slide / item" className="control-arrow control-next"></button>
        //     </div>
        // </div>
    )
}

export default Slider;