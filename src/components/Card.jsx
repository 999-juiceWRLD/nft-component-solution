import React from "react";
import Head from "./Head.jsx";
import Picture from "./Picture.jsx";
import Explanation from "./Explanation.jsx";
import Mid from "./Mid.jsx";
import Creator from "./bottom_bar/Creator.jsx";
import Credits from "./bottom_bar/Credits.jsx";


function Card() {
    return (
        <div className="card-div-and-attribs">
            <div className="card-div">
                
                <Picture 
                    src={require("../images/image-equilibrium.jpg")}
                />
                <Head />
                <Explanation />
                <Mid />
                <hr />
                <Creator 
                    src={require("../images/image-avatar.png")}
                    name={"Jules Wyvern"}
                />
                
            </div>
            <Credits />
        </div>
    )
}


export default Card;