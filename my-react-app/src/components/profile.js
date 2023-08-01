import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Routes, Route} from "react-router-dom"
import Post_history from "./post_history"
import Details from "./details"

function Profile() {
    // posts.map(print);
    return (
      <div>
        <Header />
        <Details
         />
        <Post_history />
        <Footer />
      </div>
    );
  }

export default Profile;