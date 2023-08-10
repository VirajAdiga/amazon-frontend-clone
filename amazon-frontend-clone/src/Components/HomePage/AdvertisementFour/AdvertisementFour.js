import React from "react";
import "./AdvertisementFour.css"
import imgSrc from "../../../Images/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg"

function AdvertisementFour(props){
    return (
        <div className="AdvertisementFour_main">
            <div className="AdvertisementFour_header">Up to 70% off | Electronics clearance store</div>
            <div className="AdvertisementFour_body">
                <img src={ imgSrc } className="ad_fourImage"></img>
                <img src={ imgSrc } className="ad_fourImage"></img>
                <img src={ imgSrc } className="ad_fourImage"></img>
                <img src={ imgSrc } className="ad_fourImage"></img>
            </div>
            <div className="AdvertisementFour_footer">See more</div>
        </div>
    );
}

export default AdvertisementFour;