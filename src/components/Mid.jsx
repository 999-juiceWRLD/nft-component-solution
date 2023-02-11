import React from "react";
import Days from "./mid_bar/Days";
import Eth from "./mid_bar/Eth";

function Mid() {
    return (
        <div className="mid-bar">
            
            <Eth />
            <Days />
        </div>
    )
}

export default Mid;