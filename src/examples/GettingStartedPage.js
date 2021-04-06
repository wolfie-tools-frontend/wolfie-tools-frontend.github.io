import React from "react";
import "./example.scss";
import "../main.scss";

export default function WGettingStartedPage() {
    return (
        <div className="WGettingStartedPage">
            <h1>Getting Started</h1>

            <h2>Set Up</h2>
            <ol>
                <li>In the terminal, navigate to the directory of the React web app you are creating</li>
                <li>Then type <code>npm install wt-frontend</code></li>
                <li>
                    Make sure you have the peer dependencies installed. If you don’t have these packages installed already, do the following: <code>npm install sass</code> and/or <code>npm install react-router-dom</code>
                </li>
                <li>Change your .css files to .scss and put the following code at the top of the .scss file:
                    <p><code>@use 'node_modules/wt-frontend/build/global/wolfie';</code></p>
                    <p><code>@use 'node_modules/wt-frontend/build/global/components';</code></p>
                </li>
            </ol>
            <h3>Technologies Needed</h3>
            <ul>
                <li><a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
                <li><a href="https://reactjs.org/" target="_blank">React</a></li>
                <li><a href="https://reactrouter.com/web/guides/quick-start" target="_blank">react-router-dom</a></li>
                <li><a href="https://sass-lang.com/dart-sass" target="_blank">Dart Sass</a></li>
            </ul>

        </div>
    );
}

