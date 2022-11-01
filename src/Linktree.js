import React from "react"
import './linkTreeStyle.css'
import profilepic from "./profilepic.jpg"


function LinkTree(){
    return (
        <div>
            <section id="profile-section">
                <img src={profilepic} alt="" id="profile_img"/>
                <h4 id="twitter">manokorenyasha</h4>
                <h4 id="slack">blessed nyasha</h4>
            </section>
            <section id="link-section">
                <button id="btn_twitter"><a href="https://twitter.com/ManokoreNyasha">Twitter Link</a></button>
                <button id="btn_zuri"><a href="https://training.zuri.team/">Zuri Team</a></button>
                <button id="books"><a href="http://books.zuri.team/">Zuri Books</a></button>
                <button id="book_python"><a href="https://books.zuri.team/">Python Books</a></button>
                <button id="pitch"><a href="https://background.zuri.team/">Background Check for Coders</a></button>
                <button id="book_design"><a href="https://books.zuri.team/design-rules">Design Books</a></button>
            </section>
        </div>
    )
}

export default LinkTree