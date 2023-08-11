import React, { useContext, useEffect, useState } from 'react';
import "./PlaceOrder.css"
import Grid from '@mui/material/Grid'
import { Rating, Paper } from '@mui/material';
import getSymbolFromCurrency from 'currency-symbol-map'
import {Link, useParams} from 'react-router-dom';
import { CartContext } from '../CartContext';
import image1 from '../../Images/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65_.webp'
import image2 from '../../Images/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp'
import image3 from '../../Images/mobiles/81+Zx6troaL._AC_UL640_FMwebp_QL65_.webp'
import image4 from '../../Images/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp'
import image5 from '../../Images/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp'
import image6 from '../../Images/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp'

function PlaceOrder(props){

    const {item, size, increment} = useContext(CartContext);
    const [productDetails, setProductDetails] = useState([]);
    let { id } = useParams();

    const addToCart = () => {
        increment(productDetails);
    }

    useEffect(() => {
        let list = [
            {
                id: 123456543,
                name: "New Apple iPhone 10",
                rating: "34565",
                review: "1000",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                soldby: "Darshita Electronics",
                image: image1
            },
            {
                id: 54342265,
                name: "New Apple iPhone 11",
                rating: "34565",
                review: "1000",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                soldby: "Darshita Electronics",
                image: image2
            },
            {
                id: 123453456543,
                name: "Iphone12",
                rating: "8754",
                review: "1000",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                soldby: "Darshita Electronics",
                image: image3
            },
            {
                id: 12344545456543,
                name: "Iphone13",
                rating: "3445",
                review: "1000",
                delivery: "Wednesday, Aug 18",
                price: "63735",
                soldby: "Darshita Electronics",
                image: image4
            },
            {
                id: 123465656543,
                name: "Iphone12",
                rating: "8754",
                review: "1000",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                soldby: "Darshita Electronics",
                image: image5
            },
            {
                id: 2356346363,
                name: "Iphone13",
                rating: "637357",
                review: "1000",
                delivery: "Wednesday, Aug 18",
                price: "637357",
                soldby: "Darshita Electronics",
                image: image6
            },
        ];

        let itemfilter = list.filter ( item => {
            if(item.id == id) return item;
        })

        setProductDetails(itemfilter[0]);
    }, []);

    return (
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <img className='placeorder__image' src={productDetails.image} />
                </Grid>
                <Grid item xs={4} style={{ marginTop: '150px' }}>
                    <div style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 500 }}>{ productDetails.name }</div>
                    <div>
                        <Rating name='read-only' value='3' readOnly style={{ fontSize: '20px' }} />
                        {productDetails.ratings} ratings |
                        {productDetails.review}+ answered questions 
                    </div>
                    <hr></hr>
                    <div>
                        <div className='textgap'>Price: <span className='pricetag'>{ getSymbolFromCurrency('INR') } {productDetails.price}</span></div>
                        <div className='textgap'>FREE delivery: <strong>{productDetails.delivery}</strong></div>
                        <div className='textgap'>Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                    </div>
                </Grid>
                <Grid item xs={3} style={{ marginTop: '70px' }}>
                    <Paper variant='outlined' className='placeorder__order'>
                        <div>
                            <div><strong>Without Exchange</strong></div>
                            <div>50,999</div>
                            <div>
                                <button className='placeorder__button addtocart' onClick={addToCart}>
                                    Add to Cart
                                </button>
                                <Link to='/checkout'>
                                    <button className='placeorder__button buynow'>
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceOrder;