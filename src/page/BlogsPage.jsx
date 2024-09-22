import React from "react";

import subBarimg from "../assets/arrow-line-journal.png";

import WaveLeft from "../assets/wave-blog-left.png";
import WaveRight from "../assets/wave-blog-right.png";

import "../css/BlogsPageStyle.css";
import BlogCard from "../components/BlogCard";

function BlogsPage() {
  return (
    <div>

      <div id="blogs-box-head">
        <div id="blogs-box-title">Journal</div>
        <div id="blogs-box-sub">
          <img id="blogs-box-sub-img" src={subBarimg} alt="" />{" "}
          <div id="blogs-box-sub-head">
            No Amount of Money Ever Bought a Second of Time.
          </div>
        </div>
      </div>

      <div id="blog-main">
        <div id="blog-articles-box">
          <img id="blog-ab-left" src={WaveLeft} alt="" />

          <div id="blog-ab-content">


       <BlogCard/><BlogCard/><BlogCard/>
       <BlogCard/><BlogCard/><BlogCard/>

          </div>

          <img id="blog-ab-right" src={WaveRight} alt="" />
        </div>




        <div id="author-list-blog">
          <div id="author-list-title">Authors</div>

          <div id="author-list-auth"> Vishnu Gupta</div>
          <div id="author-list-auth"> Vishnu Gupta</div>
          <div id="author-list-auth"> Vishnu Gupta</div>
          <div id="author-list-auth"> Vishnu Gupta</div>
          <div id="author-list-auth"> Vishnu Gupta</div>

         
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
