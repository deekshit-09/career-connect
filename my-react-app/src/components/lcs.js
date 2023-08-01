import React from "react";
import Comments from "./comments"
 
function CreateComments(props){
  console.log(props);
  return (
    <Comments
    key= {props.user}
    user= {props.user}
    comment={props.content}
     />
  )
}

 function Lcs(props){
   console.log(props)
   const coms=props.comment;
      console.log(coms)
   return (
     <div className="lcs">
     <p> {props.likes} </p>
     comments
     {coms.map(CreateComments)}
     
     </div>
   )
 }

 export default Lcs;