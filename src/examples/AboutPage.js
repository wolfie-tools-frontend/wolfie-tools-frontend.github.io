import React from "react";
import { WAccordion } from "wt-frontend";
import "./example.scss";
import "../main.scss";

export default function WAboutPage() {
    return (
        <div className="WAboutPage">
            <h1>About</h1>

            <h2>Wolfie Tools Front-End API</h2>
            <p>A front-end API that utilizes React and Sass for customizable components.</p>

            <h2>Design Goals</h2>
            <p>"We wish to make a front-end API that makes it easy for web front-end application developers to stylize beautiful, interactive, and responsive user interfaces. We want to make this API work the way we wish we could use it; We are our own customers." - <a href="https://www3.cs.stonybrook.edu/~richard/index.html">Richard McKenna</a></p>
            
            <h2>Technologies Used For Development</h2>
            <ul>
                <li><a href="https://nodejs.org/en/">Node.js</a></li>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://sass-lang.com/dart-sass">Dart Sass</a></li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>gulp.js</li>
            </ul>

            <h2>Background Information</h2>
            <p>This front-end API is part of Professor's McKenna's Vertically Integrated Projects Program (VIP) Resarch at Stony Brook University.</p>

        </div>
    );
}

