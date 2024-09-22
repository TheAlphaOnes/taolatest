import React from 'react'

import DefArtBanner from "../assets/def-article.png"

import "../css/BlogCardStyle.css"

function BlogCard() {
  return (
    <div id='blog-card'>
        
        <div id='blog-date-box'>
            <div id='blog-date-day'>19</div>
            <div id='blog-date-month' >DEC</div>
        </div>

        

        <div id='blog-content-td'>
            <div id='blog-content-t' > <span><a href="/article">Yup this is a title and i am really sorry for all this time</a></span> </div>

            <div id='blog-content-d' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat numquam rem harum nesciunt accusantium ipsam, animi unde ducimus eius dolorum consequuntur beatae odio tenetur et. Labore aspernatur sint quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat, earum dolore illum sapiente laboriosam rem temporibus perspiciatis quam aspernatur accusantium iusto harum voluptatibus officiis modi ea amet deserunt pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo hic temporibus voluptatibus expedita exercitationem asperiores corporis, deserunt fugit omnis, alias similique maiores inventore culpa, eius assumenda. Dolore, delectus impedit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit aspernatur architecto repudiandae optio, quibusdam iste numquam fuga harum nisi nam sunt laborum ab ipsa illo recusandae beatae excepturi sed.</div>
            <div id='blog-content-username'>@theuserwrieter</div>
        </div>

        <div id='blog-card-banner' style={{ backgroundImage: `url( ${DefArtBanner} )`  }} >
            
        </div>
    </div>
  )
}

export default BlogCard