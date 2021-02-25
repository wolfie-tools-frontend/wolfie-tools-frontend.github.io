import React from "react";
import { WButton, WCard, WCHeader, WCMedia, WCContent, WCFooter } from 'wt-frontend';
import "./example.scss";
import "../main.scss";

export default function WCardPage() {
  return (
    <div>
      <h1>WCard</h1>
      <div className="definition">Display information on a card.</div>
      <p>Place information.</p>

      <h3>default</h3>
      <WCard raised>
      </WCard>

      <h3>header-media-content-footer</h3>
      <WCard wLayout="header-media-content-footer" style={{ width: "375px", height: "400px" }} raised className="example-layout-labels">
        <WCHeader style={{ backgroundColor: "cornflowerblue" }}>Header<label>w x h</label></WCHeader>
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCFooter style={{ backgroundColor: "aquamarine" }}>Footer<label>w x h</label></WCFooter>
      </WCard>

      <h3>header-content-footer</h3>
      <WCard wLayout="header-content-footer" style={{ width: "375px", height: "400px" }} raised className="example-layout-labels">
        <WCHeader style={{ backgroundColor: "cornflowerblue" }}>Header<label>w x h</label></WCHeader>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCFooter style={{ backgroundColor: "aquamarine" }}>Footer<label>w x h</label></WCFooter>
      </WCard>

      <h3>header-content</h3>
      <WCard wLayout="header-content" style={{ width: "375px", height: "400px" }} raised className="example-layout-labels">
        <WCHeader style={{ backgroundColor: "cornflowerblue" }}>Header<label>w x h</label></WCHeader>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
      </WCard>

      <h3>header-media-content</h3>
      <WCard wLayout="header-media-content" style={{ width: "375px", height: "400px" }} raised className="example-layout-labels">
        <WCHeader style={{ backgroundColor: "cornflowerblue" }}>Header<label>w x h</label></WCHeader>
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
      </WCard>

      <h3>media-content</h3>
      <WCard wLayout="media-content" style={{ width: "375px", height: "400px" }} raised className="example-layout-labels">
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
      </WCard>

      <h3>media-content-footer</h3>
      <WCard wLayout="media-content-footer" style={{ width: "375px", height: "400px" }} raised className="example-layout-labels">
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCFooter style={{ backgroundColor: "aquamarine" }}>Footer<label>w x h</label></WCFooter>
      </WCard>

      <h3>content-footer</h3>
      <WCard wLayout="content-footer" style={{ width: "375px", height: "400px" }} raised className="example-layout-labels">
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCFooter style={{ backgroundColor: "aquamarine" }}>Footer<label>w x h</label></WCFooter>
      </WCard>

      <h2>Side Media Layouts</h2>
      <h3>header-content-footer-media</h3>
      <WCard wLayout="header-content-footer-media" style={{ width: "375px", height: "200px" }} raised className="example-layout-labels">
        <WCHeader style={{ backgroundColor: "cornflowerblue" }}>Header<label>w x h</label></WCHeader>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCFooter style={{ backgroundColor: "aquamarine" }}>Footer<label>w x h</label></WCFooter>
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
      </WCard>

      <h3>header-content-media</h3>
      <WCard wLayout="header-content-media" style={{ width: "375px", height: "200px" }} raised className="example-layout-labels">
        <WCHeader style={{ backgroundColor: "cornflowerblue" }}>Header<label>w x h</label></WCHeader>
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
      </WCard>

      <h3>content-media</h3>
      <WCard wLayout="content-media" style={{ width: "375px", height: "200px" }} raised className="example-layout-labels">
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
      </WCard>

      <h3>content-footer-media</h3>
      <WCard wLayout="content-footer-media" style={{ width: "375px", height: "200px" }} raised className="example-layout-labels">
        <WCContent style={{ backgroundColor: "lightskyblue" }}>Content<label>w x h</label></WCContent>
        <WCFooter style={{ backgroundColor: "aquamarine" }}>Footer<label>w x h</label></WCFooter>
        <WCMedia style={{ backgroundColor: "ivory" }}>Media<label>w x h</label></WCMedia>
      </WCard>

      <br/><br/><br/>

    </div>
  );
}
