import {ChangeEvent, useEffect, useRef, useState} from "react";
import {Product, productsList} from "../store/products";
import {useNavigate} from "react-router-dom";
import {useRecoilValueLoadable} from "recoil";
import {KeyCode} from "../constants/keycode";

//[검색]
const Search =() => {
    const navigate = useNavigate();
    const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList);
    const products: Product[] = 'hasValue' ===ProductsLoadable.state ? ProductsLoadable.contents: [];
    const [search, setSearch] = useState('');
    const [disabled, setDisabled]= useState(true);
    const [filterItems, setFilterItems] = useState(products);
    const $search = useRef<HTMLInputElement>(null);
    const $searchedItem = '.js-searchedItem'

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event?.target.value);
    };

    //[상품이동]
    const goLink = (id: number) => {
        setSearch('');
        navigate(`/product/${id}`)
    };

    const goSearchList = (event:any) => {
        if(KeyCode.keyDown === event.keyCode) { //keydown
            event.preventDefault();
            let $next = event.target.nextElementSibling;
            if(!$next || !$next.querySelector($searchedItem)) {
                return;
            }
            $next.querySelector($searchedItem).focus();
        } else if (KeyCode.enter == event.keyCode) {  //enter
            event.preventDefault();
            let $next = event.target.nextElementSibling.querySelector('li a');
            !!$next && $next.click();
        }
    };


    //[키워드 나열]
    const changeTarget = (event:any) => {
        if(KeyCode.keyUp === event.keyCode) { //keyup
            event.preventDefault();
            let $prev = event.target.parentElement.previousElementSibling;
            if(!$prev) {
                $search?.current?.focus();
                return;
            }
            $prev.querySelector($searchedItem).focus();
        } else if (KeyCode.keyDown == event.keyCode) { //keydown
            event.preventDefault();
            let $next = event.target.parentElement.nextElementSibling;
            if(!$next) {
                return
            }
            $next.querySelector($searchedItem).focus();
        }
    };

    const toggleSearch = () => {
        $search?.current?.classList.toggle('-z-10');
        $search?.current?.classList.toggle('translate-y-full');
        $search?.current?.classList.toggle('!opacity-100');
        $search?.current?.blur();
        setSearch('');
        setFilterItems([]);
    }

    useEffect(() => {
       setFilterItems(
         products.filter(($elm) => {
             if(search ==='') return;
             return $elm.title.toLowerCase().includes(search.toLowerCase());
         })
       );
    },[search, products]);

    useEffect(() => {
        if('hasValue' === ProductsLoadable.state) {
            setDisabled(false);
        }
    },[ProductsLoadable.state]);

    return (
        <div className='dropdown'>
            <button type='button' onClick={toggleSearch} className='flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search'>
                <svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1,1 h4" stroke="black" strokeLinecap="round" />
                </svg>
            </button>
            <input type='text' placeholder='검색' disabled={disabled} ref={$search} value={search} onKeyUp={goSearchList} onKeyDown={goSearchList} onChange={handleSearchChange} className='fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput'/>
            <ul className='!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600'>
                {filterItems.map((product) => {
                  return (
                      <li key={product.id}>
                          <a
                              href='#'
                              onClick={(e) => {
                                  e.preventDefault();
                                  goLink(product.id);
                              }}
                              onTouchStart={(e) =>{
                                  e.preventDefault();
                                  goLink(product.id)
                              }}
                              onKeyDown={changeTarget}
                              className={'text-left js-searchedItem'}
                          >
                              <span className='text-gray-600 dark:text-white line-clamp-2'>{product.title}</span>
                          </a>
                      </li>
                  )
                })}
            </ul>
        </div>
    )
}

export default Search;