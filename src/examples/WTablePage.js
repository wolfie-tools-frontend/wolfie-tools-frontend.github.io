import React from "react";
import { WTable } from "wt-frontend";
import "./example.scss";
import "../main.scss";

export default function WTablePage() {
    return (
        <div className="WTablePage">
            <h1>WTable</h1>
            
            <WTable className="primary alt-bg-white">
                <tr>
                    <th className="hover-darken">hi</th>
                    <th>bye</th>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>bye</td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>bye</td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>bye</td>
                </tr>
            </WTable>
        </div>
    );
}