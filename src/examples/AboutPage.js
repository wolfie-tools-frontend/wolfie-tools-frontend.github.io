import React from "react";
import "./example.scss";
import "../main.scss";

export default function WAboutPage() {
    return (
        <div className="WAboutPage">
            <h1>About</h1>

            <h2>Design Goals</h2>
            <div>We wish to make a front-end API that makes it easy for web front-end application developers to stylize beautiful, interactive, and responsive user interfaces.</div>
            <div>We want to make this API work the way we wish we could use it; We are our own customers.</div>
            <div>- <a href="https://www3.cs.stonybrook.edu/~richard/index.html">The McKillaGorilla</a></div>

            <h2>Technologies Used</h2>
            <ul>
                <li><a href="https://nodejs.org/en/">Node.js</a></li>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://sass-lang.com/dart-sass">Dart Sass</a></li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
            </ul>



        </div>
    );
}

