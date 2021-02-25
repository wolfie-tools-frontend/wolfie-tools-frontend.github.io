import React, { useState } from "react";
import { WButton, WModal, WMHeader, WMFooter, WMMain } from 'wt-frontend';
import "./example.scss";
import "../main.scss";

export default function WModalPage() {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    return (
        <div className="WModalPage">
            <h1>WModal</h1>
            <p> Without Overlay</p>
            <WButton onClick={() => setModal1(true)}>
                Show
            </WButton>
            <WModal visible={modal1} animation="slide-fade-right">
                <WMHeader>Test</WMHeader>
                <WMMain>Here is the content</WMMain>
                <WMFooter>
                    <WButton onClick={() => (setModal1(false))}>
                        Close
                    </WButton>
                </WMFooter>
            </WModal>

            <p> With Overlay</p>
            <WButton onClick={() => setModal2(true)}>
                Show
            </WButton>
            <WModal cover={true} visible={modal2} animation="slide-fade-top">
            <WMHeader>Test</WMHeader>
                <WMMain>Here is the content</WMMain>
                <WMFooter>
                    <WButton onClick={() => (setModal2(false))}>
                        Close
                    </WButton>
                </WMFooter>
            </WModal>

        </div>
    )
}