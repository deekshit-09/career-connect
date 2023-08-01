import React from "react";
import Lcs from "./lcs"

 

function Note(props) {
  // console.log(props.comments[0])
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div  className="lcs" >
      <Lcs
      likes ={props.likes}
      comment={props.comments}
       />
      </div>

      
    </div>
  );
}

export default Note;
