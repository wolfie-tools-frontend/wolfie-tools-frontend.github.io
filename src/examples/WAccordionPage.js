import React from "react";
import { WAccordion } from 'wt-frontend';
import "./example.scss";
import "../main.scss";

export default function WAccordionPage() {
    return (
        <div className="WAccordionPage">
            <h1>WAccordion</h1>
            <div className="definition">Collapsable way to store information.</div>
            <p>Takes in a header and a body.</p>

            <WAccordion header="Accordion #1"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna non leo faucibus pretium nec eget purus. Nam ornare libero nec mi ultrices, at pretium orci auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In aliquet dapibus cursus. Praesent sed nisi eget mi tempus finibus a vel dui. Donec tempus elit vestibulum, luctus ex at, ullamcorper justo. Sed aliquet, metus id cursus convallis, sapien erat congue ante, non malesuada urna sapien ut turpis. In hac habitasse platea dictumst. Morbi maximus elementum felis, et semper erat tempor a. Nulla facilisi. Proin lacinia turpis lectus, at convallis purus malesuada vel. Curabitur ut suscipit dolor.">
            </WAccordion>
        </div>
    );
}

