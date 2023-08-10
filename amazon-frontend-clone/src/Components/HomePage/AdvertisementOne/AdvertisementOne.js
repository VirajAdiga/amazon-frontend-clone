import React from "react";
import "./AdvertisementOne.css";
import imgSrc from "../../../Images/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg"

function AdvertisementOne(props){
    return (
        <div className="AdvertisementOne_main">
            <div className="AdvertisementOne_header">Up to 70% off | Electronics clearance store</div>
            <div className="AdvertisementOne_body">
                <img src={ imgSrc } width="300px"></img>
            </div>
            <div className="AdvertisementOne_footer">See more</div>
        </div>
    );
}

export default AdvertisementOne;