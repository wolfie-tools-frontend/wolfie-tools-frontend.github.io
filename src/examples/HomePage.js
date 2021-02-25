import React from "react";
import "./example.scss";
import "../main.scss";

export default function WHomePage() {
    return (
        <div className="WHomePage">
            <h1>Wolfie Tools Front-End API Documentation</h1>

            <h2>How to Get Started</h2>
            <h3>Set Up</h3>
            <ol>
                <li>In the terminal, navigate to the directory of the React web app you are creating</li>
                <li>Then type <label className="code-text">npm install wt-frontend</label></li>
                <li>Change your .css files to .scss and put the following code at the top of the .scss file:
                    <p className="code-text">@use 'node_modules/wt-frontend/build/global/wolfie';</p>
                    <p className="code-text">@use 'node_modules/wt-frontend/build/global/components';</p>
                </li>
            </ol>
            <h3>Technologies Needed</h3>
            <ul>
                <li><a href="https://nodejs.org/en/">Node.js</a></li>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://sass-lang.com/dart-sass">Dart Sass</a></li>
            </ul>

        </div>
    );
}

