import React, { useState, useEffect } from "react";
import Sidebar from "components/sidebar/sidebar"
import Header from "components/header/header"
import Realtors from "components/realtors/realtors"
import StoryPictures from "components/story/story__pictures"
import StoryContent from "components/story/story__content"


function IndexPage() {
  return <div className="container">
    <Sidebar></Sidebar>
    <Header></Header>
    <Realtors></Realtors>
    <section className="features">Features</section>
    <StoryPictures></StoryPictures>
    <StoryContent></StoryContent>
    <section className="homes">Homes</section>
    <section className="gallery">Gallery</section>
    <footer className="footer">footer</footer>
    Index Page</div>;
}

export default IndexPage;
