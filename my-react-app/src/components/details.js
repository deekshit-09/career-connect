import React from "react";
import dp from "./dp.jpg"

function Details(){
    return (
        <div className="details">
            <img src={dp}/>
            <span><p>first name</p></span>
            <span><p>Roll No</p></span>
            <span><p>passout year </p></span>
        </div>
    )
}
export default Details
