import React, { useEffect, useState } from "react";

import "../css/ArticlePageStyle.css";

import BannerImgDef from "../assets/def-article.png";
import DownWave from "../assets/down-wave.png";

import MyMd from "../articles/Test.md";
// import { MDXProvider } from '@mdx-js/react';
import Markdown from "react-markdown";

function ArticlePage() {
  const [markdown, setMarkdown] = useState("");
  
  useEffect(() => {
    fetch(MyMd)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);


  console.log(markdown)

  return (
    <div id="article-box">
      <div id="article-box-shell">
        <div
          id="article-box-banner"
          style={{ backgroundImage: `url( ${BannerImgDef} )` }}
        >
          <div id="article-ta">
            <div id="article-t">
              Yep this is a title , and i’m really sorry for all this time .
            </div>
            <div id="article-a">by Vishnu Gupta</div>
          </div>
        </div>

        <div id="article-datetime">10.12.2023</div>

        <div id="article-main-content">
          <Markdown>

          {markdown}

          </Markdown>
        </div>

        <div id="article-bottom-img">
          <img src={DownWave} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
