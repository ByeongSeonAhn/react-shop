import {Category} from '../constants/category'

type BreadCrumbs = {
    category?: string;
    crumb?: string;
} & typeof defaultProps;

const defaultProps = {
    category: '',
    crumb: '',
};

//[개별 상품 클릭시 상단 Description]
const BreadCrumb = ({category,crumb}: BreadCrumbs) : JSX.Element => {
    return (
        <div className={'text-sm breadcrumbs'}>
            <ul>
                <li>{!!Category[category] ? Category[category]: category}</li>
                <li>{crumb}</li>
            </ul>
        </div>
    );
}


BreadCrumb.defaultProps = defaultProps;

export default BreadCrumb;


