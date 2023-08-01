import React from "react";

import {Routes, Route} from "react-router-dom"

import Profile from "./profile"
// function print(props){
//   // console.log("123")
//   // console.log(props.comments[0]);
// }

function App() {
  // posts.map(print);
  return (
    <div>
      <Routes>
        <Route path='/' element= {<h1>helo</h1>}> </Route>
        <Route path='/profile' element= {<Profile />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
