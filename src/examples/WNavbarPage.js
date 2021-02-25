import React from "react";
import { WButton, WNavbar, WNavItem } from 'wt-frontend';
//import WInput from "../components/winput/WInput";
import "./example.scss";
import "../main.scss";

export default function WNavbarPage() {
  return (
    <div className="WNavbarPage">
      <h1>WNavbar</h1>
      <div className="definition">Horizontal navigation used to redirect.</div>
      <p>Utilizes React Router. Uses React Router’s Router and NavLink.</p>

      <h2>Without WNavItem</h2>
      <WNavbar color="accent">
        <ul>
          <li className="hover-transparent-darken">
            <a href="">Logo</a>
          </li>
        </ul>

        <ul>
          <li className="hover-transparent-darken">
            <a href="">About Me</a>
          </li>
          <li className="hover-transparent-darken ripple-dark">
            <a href="">Resume</a>
          </li>
          <li className="hover-transparent-darken ripple-dark">
            <a href="">Contact</a>
          </li>
        </ul>
      </WNavbar>

      <h2>With WNavItem</h2>
      <WNavbar color="warning">
        <ul>
          <WNavItem hoverAnimation="darken" clickAnimation="ripple-light">
            <a href="">Logo</a>
          </WNavItem>
        </ul>

        <ul>
          <WNavItem hoverAnimation="darken" clickAnimation="ripple-light">
            <a href="">About Me</a>
          </WNavItem>
          <WNavItem hoverAnimation="darken" clickAnimation="ripple-light">
            <a href="">Resume</a>
          </WNavItem>
          <WNavItem hoverAnimation="darken" clickAnimation="ripple-light">
            <a href="">Contact</a>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar color="colored">
        <ul>
          <WNavItem hoverAnimation="lighten">
            <a href="">Logo</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten">
            <a href="">Sass</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Components</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">JavaScript</a>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar style={{ backgroundColor: "#142850" }}>
        <ul>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Logo</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Home</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Documentation</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Examples</a>
          </WNavItem>
        </ul>
        <ul>
          <WNavItem>
            <input
              type="text"
              id="name"
              name="name"
              size="20"
              placeholder="Search"
            />
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar color="success">
        <ul>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Logo</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Home</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Documentation</a>
          </WNavItem>
          <WNavItem hoverAnimation="lighten" clickAnimation="ripple-light">
            <a href="">Examples</a>
          </WNavItem>
        </ul>
        <ul>
          <WNavItem>
            <a href="">
              <i class="fab fa-github fa-lg"/>
            </a>
          </WNavItem>
          <WNavItem>
            <a href="">
              <i class="fab fa-twitter fa-lg"/>
            </a>
          </WNavItem>
          <WNavItem>
            <a href="">
              <i class="fab fa-slack fa-lg"/>
            </a>
          </WNavItem>
          <WNavItem clickAnimation="ripple-light">
            <a href="">Download</a>
          </WNavItem>
        </ul>
      </WNavbar>

      <WNavbar color="transparent">
        <ul>
          <WNavItem hoverAnimation="text-accent">
            <a href="">Hot</a>
          </WNavItem>
          <WNavItem hoverAnimation="text-primary">
            <a href="">New</a>
          </WNavItem>
          <WNavItem hoverAnimation="text-primary">
            <a href="">Rising</a>
          </WNavItem>
          <WNavItem hoverAnimation="text-primary">
            <a href="">Controversial</a>
          </WNavItem>
          <WNavItem hoverAnimation="text-primary">
            <a href="">Top</a>
          </WNavItem>
          <WNavItem hoverAnimation="text-primary">
            <a href="">Wiki</a>
          </WNavItem>
          <WNavItem hoverAnimation="text-primary">
            <a href="">Show Images</a>
          </WNavItem>
        </ul>
      </WNavbar>

      

    </div>
  );
}
