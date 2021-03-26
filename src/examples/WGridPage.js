import React from "react";
import { WRow, WCol } from "wt-frontend";
import "./example.scss";
import "../main.scss";

export default function WGridPage() {

    return (
        <div className="WGridPage">
            <h1>WGrid</h1>
            <div className="definition">Organize the view.</div>
            <p>
                <code>WGrid</code> is split into 2 components: <code>WRow</code> and <code>WCol</code>. <code>WRow</code> and <code>WCol</code> utilize <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Grids</a>.You should use CSS Grid properties with <code>WRow</code> and <code>WCol</code>.
            </p>

            <p>
                One <code>WRow</code> is split into 12 equal sized columns. If you don’t want 12 equal sized columns, you can define your own row with CSS Grids.    
            </p>
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
            <p>
                Code
                <pre>
{`<WRow>
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
</WRow>`}
                </pre>
            </p>

            <WRow>
                <WCol size="2">size 2</WCol>
                <WCol size="8">size 8</WCol>
                <WCol size="2">size 2</WCol>
            </WRow>
            <p>
                Code
                <pre>
{`<WRow>
    <WCol size="2">size 2</WCol>
    <WCol size="8">size 8</WCol>
    <WCol size="2">size 2</WCol>
</WRow>`}
                </pre>
            </p>

            <hr/>

            <h2>Nested Grid</h2>
            <p>
                You can have a grid within a grid if you want to even more subdivisions.
            </p>
            <WRow>
                <WCol size="3">
                    <WRow>
                        <WCol size="3" className="content">size 3</WCol>
                        <WCol size="9" className="content">size 9</WCol>
                    </WRow>
                </WCol>
                <WCol size="9">size 9</WCol>
            </WRow>
            <p>
                Code
                <pre>
{`<WRow>
    <WCol size="3">
        <WRow>
            <WCol size="3" className="content">size 3</WCol>
            <WCol size="9" className="content">size 9</WCol>
        </WRow>
    </WCol>
    <WCol size="9">size 9</WCol>
</WRow>`}
                </pre>
            </p>

            <hr/>

            <h2>Props</h2>
            <table>
                <tr>
                    <th>Prop</th>
                    <th>Value</th>
                    <th>Description</th>
                </tr>

                <tr>
                    <td rowSpan={2}>
                        size
                        <br/>
                        (<code>WCol</code> only)
                    </td>
                    <td>(default)</td>
                    <td>The column spans 1 unit of the row</td>
                </tr>
                <tr>
                    <td>1-12</td>
                    <td>The columns spans the given number of units of the row</td>
                </tr>
                <tr></tr>
            </table>

            <br />

        </div>
    );
}