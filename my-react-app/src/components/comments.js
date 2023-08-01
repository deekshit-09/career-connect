import React from "react";

function Comments(props){
  return (
    <div>
    
    <p> {props.user} </p>
    <p> {props.comment} </p>
    ------------------------------
    </div>
  )
}
export default Comments;