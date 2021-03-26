import React from "react";
import { WButton } from "wt-frontend";
import "./example.scss";
import "../main.scss";

export default function WButtonPage() {
  function myFunction() {
    alert("I am an alert box!");
  }

  return (
    <div className="WButtonPage">
      <h1>WButton</h1>
      <div className="definition">Performs an action when clicked.</div>
      <p>On click functionality.</p>

      <h2>Basic Example</h2>

      <WButton color="primary"
        shape="pill"
        hoverAnimation="lighten"
        clickAnimation="ripple-light"
        onClick={myFunction}>
          Button
      </WButton>
      <p>
        Code
        <pre>
{`function myFunction() {
  alert("I am an alert box!");
}

<WButton color="primary"
         shape="pill"
         hoverAnimation="lighten"
         clickAnimation="ripple-light"
         onClick={myFunction}> Button </WButton>`}
        </pre>
      </p>

      <br />

      <p>Below are all the different stylings you can apply to a WButton. There will be a table listing all of the props used to achieve these at the end.</p>

      <h2>Types</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <WButton
                onClick={myFunction}
                color="primary"
                id="hello"
                name="wolfie"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Ghost</td>
            <td>
              <WButton
                wType="ghost"
                onClick={myFunction}
                color="primary"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted</td>
            <td>
              <WButton
                wType="texted"
                onClick={myFunction}
                color="primary"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Transparent</td>
            <td>
              <WButton
                wType="transparent"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Shapes</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Rounded</td>
            <td>
              <div className="side-by-side">
                <WButton
                  shape="rounded"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  shape="rounded"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  shape="rounded"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  shape="rounded"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Pill</td>
            <td>
              <div className="side-by-side">
                <WButton
                  shape="pill"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  shape="pill"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  shape="pill"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  shape="pill"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Circle</td>
            <td>
              <div className="side-by-side">
                <WButton
                  shape="circle"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  shape="circle"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  shape="circle"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="transparent"
                  shape="circle"
                  onClick={myFunction}
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Square</td>
            <td>
              <div className="side-by-side">
                <WButton
                  shape="square"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  shape="square"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  shape="square"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="transparent"
                  shape="square"
                  onClick={myFunction}
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Color</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Primary</td>
            <td>
              <div className="side-by-side">
                <WButton
                  color="primary"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  color="primary"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  color="primary"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Accent</td>
            <td>
              <div className="side-by-side">
                <WButton
                  color="accent"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  color="accent"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  color="accent"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Colored</td>
            <td>
              <div className="side-by-side">
                <WButton
                  color="colored"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  color="colored"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  color="colored"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Success</td>
            <td>
              <div className="side-by-side">
                <WButton
                  color="success"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  color="success"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  color="success"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Danger</td>
            <td>
              <div className="side-by-side">
                <WButton
                  color="danger"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  color="danger"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  color="danger"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Warning</td>
            <td>
              <div className="side-by-side">
                <WButton
                  color="warning"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  color="warning"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  color="warning"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Custom</td>
            <td>
              <div className="side-by-side">
                <WButton
                  color="custom-color"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  color="custom-color"
                  style={{ borderColor: "salmon" }}
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  color="custom-color"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Size</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Small</td>
            <td>
              <div className="side-by-side">
                <WButton
                  size="small"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  size="small"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  size="small"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  size="small"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>
              <div className="side-by-side">
                <WButton
                  size="medium"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  size="medium"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  size="medium"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  size="medium"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Large</td>
            <td>
              <div className="side-by-side">
                <WButton
                  size="large"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  size="large"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  size="large"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  size="large"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Icons</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons">notifications</i>
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  <i className="material-icons">notifications</i>
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Small</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons small">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons small">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons small">notifications</i>
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  <i className="material-icons small">notifications</i>
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Large</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons large">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons large">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons large">notifications</i>
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  <i className="material-icons large">notifications</i>
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Left Align</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons left">notifications</i>
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons left">notifications</i>
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  <i className="material-icons left">notifications</i>
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  <i className="material-icons left">notifications</i>
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Center Align</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  R
                  <i className="material-icons center">notifications</i>
                  L
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  R
                  <i className="material-icons center">notifications</i>
                  L
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  R
                  <i className="material-icons center">notifications</i>
                  L
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  R
                  <i className="material-icons center">notifications</i>
                  L
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Right Align</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                  <i className="material-icons right">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                  <i className="material-icons right">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
                  color="primary"
                >
                  Button
                  <i className="material-icons right">notifications</i>
                </WButton>
                <WButton
                  wType="transparent"
                  onClick={myFunction}
                >
                  Button
                  <i className="material-icons right">notifications</i>
                </WButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <br/>
      <p>
        In order to place an icon inside a <code>WButton</code>, use the {`<i>`} tag. By default, our API provides <a href="https://material.io/resources/icons/?style=baseline">Google Material Icons</a> for use.
        Here is the code for the first example in this section:
        <pre>
{`<WButton onClick={myFunction}
         color="primary">
  <i className="material-icons"> notifications </i>
</WButton>`}
        </pre>
        <br/>
        To get the different icons sizes and alignments, you must give the icons various classes.  
      </p>
      <table>
        <tr>
          <th></th>
          <th>Class Name</th>
          <th>Value</th>
        </tr>

        <tr>
          <td rowSpan={3}>
            Size
          </td>
          <td>small</td>
          <td>font-size: 1.25rem</td>
        </tr>
        <tr>
          <td>medium</td>
          <td>font-size: 1.5rem</td>
        </tr>
        <tr>
          <td>large</td>
          <td>font-size: 2.2rem</td>
        </tr>

        <tr>
          <td rowSpan={3}>Alignment</td>
          <td>left</td>
          <td>
            margin-left: -0.25rem
            <br/>
            margin-right: 0.5rem
          </td>
        </tr>
        <tr>
          <td>right</td>
          <td>
            margin-left: 0.5rem
            <br/>
            margin-right: -0.25rem
          </td>
        </tr>
        <tr>
          <td>center</td>
          <td>
            margin-left: 0.5rem
            <br/>
            margin-right: 0.5rem
          </td>
        </tr>

        <tr>
          <td/>
          <td>disabled</td>
          <td>color: $disabled-color</td>
        </tr>
      </table>

      <hr />

      <h2>Animations</h2>
      <h3>Hovers</h3>
      <table>
        <tbody>
          <tr>
            <td>Darken</td>
            <td>
              <div className="side-by-side">
                <WButton
                  hoverAnimation="darken"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  hoverAnimation="darken"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  hoverAnimation="darken"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  hoverAnimation="darken"
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Lighten</td>
            <td>
              <div className="side-by-side">
                <WButton
                  hoverAnimation="lighten"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  hoverAnimation="lighten"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  hoverAnimation="lighten"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  hoverAnimation="lighten"
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
          <tr>
            <td>Fill</td>
            <td>
              <WButton
                wType="ghost"
                hoverAnimation="fill"
                color="primary"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Colored</td>
            <td>
              <div className="side-by-side">
                <WButton
                  wType="ghost"
                  hoverAnimation="colored"
                  color="primary"
                >
                  Button
              </WButton>
                <WButton
                  wType="texted"
                  hoverAnimation="colored"
                  color="primary"
                >
                  Button
              </WButton>
              </div>
            </td>
          </tr>

        </tbody>
      </table>

      <h3>Click</h3>
      <table>
        <tbody>
          <tr>
            <td>Ripple-dark</td>
            <td>
              <div className="side-by-side">
                <WButton
                  clickAnimation="ripple-dark"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  clickAnimation="ripple-dark"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  clickAnimation="ripple-dark"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  clickAnimation="ripple-dark"
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>Ripple-light</td>
            <td>
              <div className="side-by-side">
                <WButton
                  clickAnimation="ripple-light"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  clickAnimation="ripple-light"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  clickAnimation="ripple-light"
                  color="primary"
                >
                  Button
                </WButton>
                <WButton
                  wType="transparent"
                  clickAnimation="ripple-light"
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Disabled</h2>
      <table>
        <div className="side-by-side">
          <WButton
            disabled
          >
            Button
                </WButton>
          <WButton
            wType="ghost"
            disabled
          >
            Button
                </WButton>
          <WButton
            wType="texted"
            disabled
          >
            Button
                </WButton>
          <WButton
            wType="transparent"
            disabled
          >
            Button
                </WButton>
        </div>
      </table>

      <hr />

      <h2>Raised</h2>
      <table>
        <div className="side-by-side">
          <WButton
            raised
            color="primary"
          >
            Button
                </WButton>
          <WButton
            wType="ghost"
            raised
            color="primary"
          >
            Button
                </WButton>
          <WButton
            wType="texted"
            raised
            color="primary"
          >
            Button
                </WButton>
          <WButton
            wType="transparent"
            raised
          >
            Button
                </WButton>
        </div>
      </table>

      <hr />

      <h2>Props</h2>
      <table>
        <tr>
          <th>Prop</th>
          <th>Value</th>
          <th>Description</th>
        </tr>

        <tr>
          <td rowSpan={4}>wType</td>
          <td>(default)</td>
          <td>Solid filled color</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>Outlined color</td>
        </tr>
        <tr>
          <td>texted</td>
          <td>Only text, no border</td>
        </tr>
        <tr>
          <td>transparent</td>
          <td>Transparent filled color</td>
        </tr>

        <tr>
          <td rowSpan={8}>
            color
            <br/><br/>
            Note that transparent<br/><code>wType</code> will have no color
          </td>
          <td>(default)</td>
          <td>No color/White</td>
        </tr>
        <tr>
          <td>(custom)</td>
          <td>Passing in your own class with color styling to a (default) color <code>WButton</code></td>
        </tr>
        <tr>
          <td>primary</td>
          <td>Theme's primary color</td>
        </tr>
        <tr>
          <td>accent</td>
          <td>Theme's accent color</td>
        </tr>
        <tr>
          <td>colored</td>
          <td>Theme's button-background-color and button-text color</td>
        </tr>
        <tr>
          <td>success</td>
          <td>Green</td>
        </tr>
        <tr>
          <td>danger</td>
          <td>Red</td>
        </tr>
        <tr>
          <td>warning</td>
          <td>Yellow</td>
        </tr>

        <tr>
          <td rowSpan={5}>shape</td>
          <td>(default)</td>
          <td>Sharp corners</td>
        </tr>
        <tr>
          <td>rounded</td>
          <td>Slightly rounded corners</td>
        </tr>
        <tr>
          <td>pill</td>
          <td>Fully rounded corners</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>Circle, intended for single icons</td>
        </tr>
        <tr>
          <td>square</td>
          <td>Square, intended for single icons</td>
        </tr>

        <tr>
          <td rowSpan={4}>size</td>
          <td>(default)</td>
          <td>Medium size</td>
        </tr>
        <tr>
          <td>small</td>
          <td>0.9rem</td>
        </tr>
        <tr>
          <td>medium</td>
          <td>1rem</td>
        </tr>
        <tr>
          <td>large</td>
          <td>1.25rem</td>
        </tr>

        <tr>
          <td rowSpan={2}>span</td>
          <td>(default)</td>
          <td>false</td>
        </tr>
        <tr>
          <td>true</td>
          <td>Size extends to width of parent container</td>
        </tr>

        <tr>
          <td rowSpan={4}>hoverAnimation</td>
          <td>(default)</td>
          <td>None</td>
        </tr>
        <tr>
          <td>darken</td>
          <td>Background/text darkens on hover<br/>(more apparent on lighter backgrounds)</td>
        </tr>
        <tr>
          <td>lighten</td>
          <td>Background/text lightens on hover<br/>(more apparent on darker backgrounds)</td>
        </tr>
        <tr>
          <td>fill</td>
          <td>For ghost <code>wType</code>, fills the background to be solid</td>
        </tr>

        <tr>
          <td rowSpan={3}>clickAnimation</td>
          <td>(default)</td>
          <td>None</td>
        </tr>
        <tr>
          <td>ripple-dark</td>
          <td>Creates a dark ripple across the button<br/>(works better on lighter buttons)</td>
        </tr>
        <tr>
          <td>ripple-light</td>
          <td>Creates a light ripple across the button<br/>(works better on darker buttons)</td>
        </tr>

        <tr>
          <td rowSpan={2}>raised</td>
          <td>(default)</td>
          <td>false</td>
        </tr>
        <tr>
          <td>True</td>
          <td>Provides small shadow for depth</td>
        </tr>

        <tr>
          <td rowSpan={2}>disabled</td>
          <td>(default)</td>
          <td>false</td>
        </tr>
        <tr>
          <td>True</td>
          <td>Provides styling that makes the button look disabled(greyed out)</td>
        </tr>

        <tr></tr>
      </table>

      <br />

    </div >
  );
}
