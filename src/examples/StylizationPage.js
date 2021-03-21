import React from "react";
import "./example.scss";
import "../main.scss";

export default function WStylizationPage() {
    return (
        <div className="WStylizationPage">
            <h1>Stylization</h1>

            <h2>React Syntax</h2>
            <p>Wolfie Tools Front-End API’s React Components can be called with: </p>
            <code>{`<WComponentName>{children}</WComponentName>`}</code>
            <p>Wolfie Components uses defined props that apply styled classes.</p>

            <h2>Example</h2>
            <pre>
{`import { WButton } from 'wt-frontend';
    
<WButton 
wType="ghost"
color="accent"
shape="rounded"
hoverAnimation="fill"
clickAnimation="ripple-light"
>
    Button Text
</WButton>
`
}                    
            </pre>

            <p>In order to properly use our stylings, your Sass file must contains the following: </p>
            <code>{`@use 'node_modules/wt-frontend/build/global/wolfie' as *;`}</code><br></br>
            <code>{`@use 'node_modules/wt-frontend/build/global/components';`}</code>

            <p>If you installed our API in a different location, change the URL to the location where you installed it. Be sure to import your Sass file into your React app.</p>

        </div>
    );
}

