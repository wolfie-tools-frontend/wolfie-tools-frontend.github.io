import React from "react";
import { WRow, WCol } from "wt-frontend";
import "./example.scss";
import "../main.scss";

export default function WGridPage() {

    return (
        <div className="WGridPage">
            <h1>WGrid</h1>
            <div className="definition">Organize the view.</div>
            <p>WGrid is split into 2 components: WRow and WCol. WRow and WCol utilizes CSS Grids.You should use CSS Grid properties with WRow and WCol.</p>

            <h2>12 column grid</h2>
            <WRow>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
                <WCol size="1">size 1</WCol>
            </WRow>

            <WRow>
                <WCol size="2">size 2</WCol>
                <WCol size="8">size 8</WCol>
                <WCol size="2">size 2</WCol>
            </WRow>

            <WRow>
                <WCol size="0">default size</WCol>
            </WRow>

            <br />
            <h2>Nested Grid</h2>
            <WRow>
                <WCol size="3">
                    <WRow>
                        <WCol size="3" className="content">size 3</WCol>
                        <WCol size="9" className="content">size 9</WCol>
                    </WRow>
                </WCol>
                <WCol size="9">size 9</WCol>
            </WRow>

            <br />

        </div>
    );
}