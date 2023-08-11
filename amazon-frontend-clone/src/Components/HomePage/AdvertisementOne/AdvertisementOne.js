import React from "react";
import "./AdvertisementOne.css";

function AdvertisementOne(props){
    return (
        <div className="AdvertisementOne_main">
            <div className="AdvertisementOne_header">{props.definition.header}</div>
            <div className="AdvertisementOne_body">
                <img src={ props.definition.definition[0] } className="ad_oneImage"></img>
            </div>
            <div className="AdvertisementOne_footer">See more</div>
        </div>
    );
}

export default AdvertisementOne;