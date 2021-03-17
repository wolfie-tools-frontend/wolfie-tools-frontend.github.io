import React from "react";
import { WLayout, WLHeader, WLMain, WLSide, WLFooter, WCard } from "wt-frontend";

import "./example.scss";
import "../main.scss";

export default function WLayoutPage() {
  return (
    <div className="WLayoutPage">
      <h1>WLayout</h1>

      <div className="definition">Web Layouts of commonly used templates.</div>
      <p>WLayout sections an area into a header, side, main, and footer. We provide a variety of layouts that a user can pick from.
      </p>

      <h2>Layout Types</h2>
      <p>Choose a WLayout template by setting the wLayout value.</p>

      <h3>header-lside-footer</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="header-lside-footer" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>

      <h3>header-rside-footer</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="header-rside-footer" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>

      <h3>header-lside-rside-footer</h3>
      <WCard style={{height: "450px", width: "750px" }} raised>
        <WLayout wLayout="header-lside-rside-footer" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>


      
      <h3>header</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="header" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
        </WLayout>
      </WCard>

      <h3>header-footer</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="header-footer" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>

      <h3>footer</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="footer" className="example-layout-labels">
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>


      <h3>header-lside</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="header-lside" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
        </WLayout>
      </WCard>

      <h3>lside</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="lside" className="example-layout-labels">
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
        </WLayout>
      </WCard>

      <h3>lside-footer</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="lside-footer" className="example-layout-labels">
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>

      <h3>header-rside</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="header-rside" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
        </WLayout>
      </WCard>

      <h3>rside</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="rside" className="example-layout-labels">
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
        </WLayout>
      </WCard>

      <h3>rside-footer</h3>
      <WCard style={{height: "450px", width: "600px" }} raised>
        <WLayout wLayout="rside-footer" className="example-layout-labels">
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>


      <h3>header-lside-rside</h3>
      <WCard style={{height: "450px", width: "750px" }} raised>
        <WLayout wLayout="header-lside-rside" className="example-layout-labels">
          <WLHeader style={{ backgroundColor: "salmon"}}>Header<label>w x 56</label></WLHeader>
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
        </WLayout>
      </WCard>

      <h3>lside-rside</h3>
      <WCard style={{height: "450px", width: "750px" }} raised>
        <WLayout wLayout="lside-rside" className="example-layout-labels">
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
        </WLayout>
      </WCard>

      <h3>lside-rside-footer</h3>
      <WCard style={{height: "450px", width: "750px" }} raised>
        <WLayout wLayout="lside-rside-footer" className="example-layout-labels">
          <WLSide side="left" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLMain style={{ backgroundColor: "ivory"}}>Main<label>w x h</label></WLMain>
          <WLSide side="right" style={{ backgroundColor: "lightskyblue"}}>Side<label>272 x h</label></WLSide>
          <WLFooter style={{ backgroundColor: "aquamarine"}}>Footer<label>w x h</label></WLFooter>
        </WLayout>
      </WCard>

      <br></br><br></br>

    </div>
  );
}

/*
.header-lside-footer-layout {
.header-rside-footer-layout {
.header-lside-rside-footer-layout {

.header-layout {
.header-footer-layout {
.footer-layout {

.header-lside-layout {
h-ls-f
.lside-layout {
.lside-footer-layout {

.header-rside-layout {
h-rs-f
.rside-layout {
.rside-footer-layout {

.header-lside-rside-layout {
h-ls-rs-f
.lside-rside-layout {
.lside-rside-footer-layout {
*/