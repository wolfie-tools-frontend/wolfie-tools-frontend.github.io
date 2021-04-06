import React from "react";
import { WAccordion } from "wt-frontend";
import "./example.scss";
import "../main.scss";

export default function WAboutPage() {
    return (
        <div className="WAboutPage">
            <h1>About</h1>

            <h2>Wolfie Tools Frontend API</h2>
            <p>A frontend API that utilizes React and Sass for customizable components.</p>

            <h3>Design Goals</h3>
            <p>"We wish to make a frontend API that makes it easy for web application developers to stylize beautiful, interactive, and responsive user interfaces. We want to make this API work the way we wish we could use it; We are our own customers." - Richard McKenna</p>
            
            <h3>Technologies Used For Development</h3>
            <ul>
                <li><a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
                <li><a href="https://reactjs.org/" target="_blank">React</a></li>
                <li><a href="https://sass-lang.com/dart-sass" target="_blank">Dart Sass</a></li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li><a href="https://gulpjs.com/" target="_blank">gulp.js</a></li>
            </ul>

            <h3>Team Members</h3>
            <p>Cynthia Lee - Team Leader, Programmer <a href="https://www.linkedin.com/in/cyn-lee/" target="_blank">(LinkedIn)</a> <a href="https://github.com/Cynthia-Lee" target="_blank">(Github)</a></p>
            <p>Andrea Lee - Programmer <a href="https://www.linkedin.com/in/and-lee/" target="_blank">(LinkedIn)</a> <a href="https://github.com/and-lee" target="_blank">(Github)</a></p>
            <p>Karen Huang - Programmer <a href="https://github.com/khuang428" target="_blank">(Github)</a></p>

            <h2>Vertically Integrated Projects</h2>
            <p>This frontend API is part of Professor McKenna's Vertically Integrated Projects (VIP) research group at Stony Brook University.</p>
            <h3>Faculty</h3>
            <p>Richard McKenna - Team Mascot <a href="https://www3.cs.stonybrook.edu/~richard/index.html" target="_blank">(Website)</a></p>
            <h3><a href="https://github.com/wolfie-VIP" target="_blank">Backend API</a></h3>
            <p>The backend API is another WolfieTools project within the same research group. It provides a template for web applications using the MERN stack, GraphQL, and Apollo.</p>
            <h4>Team Members</h4>
            <p>Charlie Monnone - Backend Developer <a href="https://github.com/charliemonnone" target="_blank">(Github)</a></p>
            <p>Justin Fagan - Backend Developer <a href="https://github.com/JustinTimeToCode" target="_blank">(Github)</a></p>
            
        </div>
    );
}

