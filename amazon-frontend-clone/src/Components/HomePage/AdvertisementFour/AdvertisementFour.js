import React from "react";
import "./AdvertisementFour.css"

function AdvertisementFour(props){
    return (
        <div className="AdvertisementFour_main">
            <div className="AdvertisementFour_header">{props.definition.header}</div>
            <div className="AdvertisementFour_body">
                <img src={ props.definition.definition[0] } className="ad_fourImage"></img>
                <img src={ props.definition.definition[1] } className="ad_fourImage"></img>
                <img src={ props.definition.definition[2] } className="ad_fourImage"></img>
                <img src={ props.definition.definition[3] } className="ad_fourImage"></img>
            </div>
            <div className="AdvertisementFour_footer">See more</div>
        </div>
    );
}

export default AdvertisementFour;