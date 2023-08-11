import React, { useEffect, useState } from 'react';
import "./RightSide.css"
import Product from './Product';
import image1 from '../../../Images/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65_.webp'
import image2 from '../../../Images/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp'
import image3 from '../../../Images/mobiles/81+Zx6troaL._AC_UL640_FMwebp_QL65_.webp'
import image4 from '../../../Images/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp'
import image5 from '../../../Images/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp'
import image6 from '../../../Images/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp'
import { Link } from 'react-router-dom';

function RightSidePanel(props){

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        let list = [
            { id: 123456543, name : "New Apple iPhone 10", rating: "34565", price: "50999", image: image1},
            { id: 54342265, name : "New Apple iPhone 11", rating: "34565", price:"50999", image: image2},
            { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543", image: image3},
            { id: 12344545456543, name : "Iphone13", rating: "3445", price:"63735", image: image4},
            { id: 123465656543, name : "Iphone12", rating: "8754", price:"76543", image: image5},
            { id: 2356346363, name : "Iphone13", rating: "637357", price:"637357", image: image6}
        ];
        setListOfProducts(list);
    }, []);

    return (
        <div className='RightSide__main'>
            {/* <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
            {
                listOfProducts.map((item) => (
                    <Link to={`/order/${item.id}`}>
                        <Product definition={item} />
                    </Link>
                ))
            }
        </div>
    );
}

export default RightSidePanel;