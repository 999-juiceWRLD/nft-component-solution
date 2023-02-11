import React from "react";

function makeWhite(name) {
    return (
        <a className="name-a" href="#">
            <span className="name-span">
                {name} 
            </span>
        </a>
    )
}

function Creator(props) {
    return (
        <div className="creator-div">
            <img className="creator-img" src={props.src} alt="creator_img"/>
            <p className="creator-p" style={{color: "hsl(215, 51%, 70%)",
            alignSelf: "center"}}>
                Creation of {makeWhite(props.name)}</p>
        </div>
    )

}

export default Creator;