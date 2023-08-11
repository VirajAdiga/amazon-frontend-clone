import React, {Component} from "react";
import "./MainPage.css";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import image1 from '../../Images/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg'
import image2 from '../../Images/box2_1.jpg'
import image3 from '../../Images/box1_4.jpg'
import image4 from '../../Images/box4_1.jpg'
import image5 from '../../Images/box2_2.jpg'
import image6 from '../../Images/tab4.jpg'
import image7 from '../../Images/tab2.jpg'
import image8 from '../../Images/box1_1.jpg'
import image9 from '../../Images/box1_2.jpg'
import image10 from '../../Images/box1_3.jpg'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] };
    }

    componentDidMount(){
        let arr = [
            {
                "type" : "one",
                "header" : "Up to 40% off | Home & Kitchen",
                "definition": [image1, image2]
            },
            {
                "type" : "four",
                "header" : "Shop by Category",
                "definition": [image3, image5, image10, image8]
            },
            {
                "type" : "one",
                "header" : "Up to 70% off | Electronics clearance store",
                "definition": [image9]
            },
            {
                "type" : "one",
                "header" : "Up to 70% off | Electronics clearance store",
                "definition": [image6]
            },
            {
                "type" : "one",
                "header" : "Up to 70% off | Electronics clearance store",
                "definition": [image9]
            },
            {
                "type" : "four",
                "header" : "Up to 30% off on Cooking essentials | Amazon Fresh",
                "definition": [image1, image4, image7, image6]
            },
            {
                "type" : "four",
                "header" : "Inspired by your Wish List",
                "definition": [image3, image6, image9, image8]
            },
            {
                "type" : "one",
                "header" : "Festive latest launches",
                "definition": [image10]
            }       
        ];
        this.setState({list: arr});
    }
    
    render() { 
        return ( 
            <div className="mainpage">
                <div style={{ paddingTop: "260px", display: "flex", flexWrap: "wrap" }}>
                    {
                        this.state.list.map((value) => (
                            value.type === "one" ?
                            <AdvertisementOne definition={value} />
                            :
                            <AdvertisementFour definition={value} />
                        ))
                    }
        
                    {/* <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementOne /> */}
                </div>
            </div>
         );
    }
}
 
export default MainPage;