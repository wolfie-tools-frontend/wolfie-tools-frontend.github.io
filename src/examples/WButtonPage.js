import React from "react";
import { WButton } from 'wt-frontend';
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

      <h2>Types</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <WButton
                onClick={myFunction}
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

      <h2>Shapes</h2>
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
            <td>Rounded</td>
            <td>
              <div className="side-by-side">
                <WButton
                  shape="rounded"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  shape="rounded"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  shape="rounded"
                  onClick={myFunction}
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
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  shape="pill"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  shape="pill"
                  onClick={myFunction}
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
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  shape="circle"
                  onClick={myFunction}
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  shape="circle"
                  onClick={myFunction}
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
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  shape="square"
                  onClick={myFunction}
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  shape="square"
                  onClick={myFunction}
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

      <h2>Size</h2>
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
            <td>Small</td>
            <td>
              <div className="side-by-side">
                <WButton
                  size="small"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  size="small"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  size="small"
                  onClick={myFunction}
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
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  size="medium"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  size="medium"
                  onClick={myFunction}
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
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  size="large"
                  onClick={myFunction}
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  size="large"
                  onClick={myFunction}
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

      <h2>Icons</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <div className="side-by-side">
                <WButton
                  onClick={myFunction}
                >
                  <i className="material-icons">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  <i className="material-icons">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
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
                >
                  <i className="material-icons small">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  <i className="material-icons small">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
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
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  <i className="material-icons medium">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
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
                >
                  <i className="material-icons large">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  <i className="material-icons large">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
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
                >
                  <i className="material-icons left">notifications</i>
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  <i className="material-icons left">notifications</i>
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
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
                >
                  R
                  <i className="material-icons center">notifications</i>
                  L
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  R
                  <i className="material-icons center">notifications</i>
                  L
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
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
                >
                  Button
                  <i className="material-icons right">notifications</i>
                </WButton>
                <WButton
                  wType="ghost"
                  onClick={myFunction}
                >
                  Button
                  <i className="material-icons right">notifications</i>
                </WButton>
                <WButton
                  wType="texted"
                  onClick={myFunction}
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
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  hoverAnimation="darken"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  hoverAnimation="darken"
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
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  hoverAnimation="lighten"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  hoverAnimation="lighten"
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
                >
                  Button
              </WButton>
                <WButton
                  wType="texted"
                  hoverAnimation="colored"
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
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  clickAnimation="ripple-dark"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  clickAnimation="ripple-dark"
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
                >
                  Button
                </WButton>
                <WButton
                  wType="ghost"
                  clickAnimation="ripple-light"
                >
                  Button
                </WButton>
                <WButton
                  wType="texted"
                  clickAnimation="ripple-light"
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

      <h2>Raised</h2>
      <table>
        <div className="side-by-side">
          <WButton
            raised
          >
            Button
                </WButton>
          <WButton
            wType="ghost"
            raised
          >
            Button
                </WButton>
          <WButton
            wType="texted"
            raised
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

      <br></br>

    </div >
  );
}
