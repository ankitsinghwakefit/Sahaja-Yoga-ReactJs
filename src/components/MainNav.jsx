import React from "react";
import "../App.css";

function MainNav(){
    return(
        <div className="main_nav_container">
            <div className="main_nav">
            <a class="button">
                Home
            </a>
            <a href="http://shrimataji.org/site/work.html" class="button">
                Work
            </a>
            <a href="http://shrimataji.org/site/life.html" class="button">
                Life
            </a>
            <a href="http://shrimataji.org/site/sahaja-yoga.html" class="button">
                Sahaja Yoga
            </a>
            <a href="http://shrimataji.org/site/travel.html" class="button">
                Travel
            </a>
            <a href="http://shrimataji.org/site/in-her-words.html" class="button">
                In Her Words
            </a>
            </div>
        </div>
    )
}

export default MainNav;