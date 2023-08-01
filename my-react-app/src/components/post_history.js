import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Lcs from "./lcs"
import posts from "../posts"
// function print(props){
//   // console.log("123")
//   // console.log(props.comments[0]);
// }

function Post_history() {
  // posts.map(print);
  return (
    <div>
      {posts.map(noteItem => (
        <div>
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          likes={noteItem.likes}
          comments={noteItem.comments}
          
        />
        </div>
      ))}
    </div>
  );
}

export default Post_history;
