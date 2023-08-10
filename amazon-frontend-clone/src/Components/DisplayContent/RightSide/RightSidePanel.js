import React, { useEffect, useState } from 'react';
import "./RightSide.css"
import Product from './Product';
import image1 from '../../../Images/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65_.webp'
import image2 from '../../../Images/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp'
import image3 from '../../../Images/mobiles/81+Zx6troaL._AC_UL640_FMwebp_QL65_.webp'
import image4 from '../../../Images/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp'
import image5 from '../../../Images/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp'
import image6 from '../../../Images/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp'

function RightSidePanel(props){

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        let list = [
            { id: 123456543, name : "Iphone10", rating: "34565", price: "4534", image: image1},
            { id: 54342265, name : "Iphone11", rating: "656", price:"76543456", image: image2},
            { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543", image: image3},
            { id: 12344545456543, name : "Iphone13", rating: "3445", price:"637357", image: image4},
            { id: 123465656543, name : "Iphone12", rating: "8754", price:"76543", image: image5},
            { id: 2356346363, name : "Iphone13", rating: "34457", price:"637357", image: image6}
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
                    <Product definition={item} />
                ))
            }
        </div>
    );
}

export default RightSidePanel;