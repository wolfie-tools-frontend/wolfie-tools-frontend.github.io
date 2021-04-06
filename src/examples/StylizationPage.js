import React from "react";
import "./example.scss";
import "../main.scss";

export default function WStylizationPage() {
    return (
        <div className="WStylizationPage">
            <h1>Stylization</h1>

            <h2>React Syntax</h2>
            <p>Wolfie Tools Frontend API’s React Components can be called with: </p>
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
`}
            </pre>

            <hr/>

            <h2>Dart Sass Syntax</h2>
            <p>
                <a href="https://sass-lang.com/" target="_blank">Sass</a> is “CSS with superpowers”. It has more features and modularity than what CSS provides. You can define and use variables, functions and mixins.
                SCSS variables are stylization variables that can be called on. They begin with a “$” followed by the variable name. $variable
            </p>

            <p>In order to properly use our stylings, your Sass file must contains the following: </p>
            <code>{`@use 'node_modules/wt-frontend/build/global/wolfie' as *;`}</code><br></br>
            <code>{`@use 'node_modules/wt-frontend/build/global/components';`}</code>
            <p>If you installed our API in a different location, change the URL to the location where you installed it. Be sure to import your Sass file into your React app.</p>

            <p>
                Wolfie Tools Frontend API utilizes @use for it’s theming. <a href="https://sass-lang.com/documentation/at-rules/use" target="_blank">Read more about how @use here.</a>
                <br></br><a href="https://sass-lang.com/blog/the-module-system-is-launched" target="_blank">In this frontend API, we will be using “@use” as “@import” is deprecated.</a>
            </p>

            <h2>HTML Attributes</h2>
            <p>
                HTML provides other default props (known as HTML attributes) that you can apply to our components. In the definition of our components, these are all automatically grouped as “...other”. This means that you can use regular HTML tags for our components.
            </p>
            <p>
                Example:
                <br></br><code>{`children, className, onClick, style, wType, shape, color, size, span, hoverAnimation, clickAnimation, value, disabled, shadow, ...other`}</code>
                <br></br>Here are the props for our WButton component, which is a wrapper around the HTML {`<button>`} tag. One HTML attribute for {`<button>`} that is not explicitly listed here is “name”.
                This works because all props unspecified by our code are gathered into a single array using the “...other”. This is called the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_blank">rest parameter syntax.</a>
            </p>

            <hr/>

            <h2>Globals</h2>
            <p>
                <code>@use 'node_modules/wt-frontend/build/global/wolfie';</code>
                <br></br>Includes colors, hover effects and animations.
                <br></br>@use files
                <br></br>@include mixins
                <br></br>Call on defined $variables in different files and that can be used on any {`<div>`}

                <h3>Global Colors:</h3>
                Preset color classes (success, warning, danger) will also change the text color, not just the background color of a component.

                <h3>Animations</h3>
            <p>
                Animations readily available for users to call on or pass as a prop for any element. Animations are also used for Wolfie Tools Frontend API components.
                <br></br>
                The list of mixins you can use: <a href="https://github.com/wolfie-tools-frontend/wolfie-tools-frontend-api/blob/master/src/global/_animations.scss" target="_blank">https://github.com/wolfie-tools-frontend/wolfie-tools-frontend-api/blob/master/src/global/_animations.scss</a>
                <br></br>
                <h4>Custom Animations:</h4>
                You may create your own animations from scratch or use existing ones provided by this API.
                <br></br>Note: transparent-dark, transparent-light, transparent-colored: are typically only used by ghost and texted buttons
            </p>
            </p>

            <hr/>

            <h2>Themes</h2>
            <p>
                Editable scss $variables at the top of the file.
                <h3>How to edit themes:</h3>
                At the top (first line) of your Sass file that uses our API’s stylings, include the following:
<pre>{`
@use 'node_modules/wt-frontend/build/global/theme' with (
    $primary-color: blue
    $accent-color: yellow
    // you can change other variables here
);
`}
                </pre>
            </p>
            <h3>Theme Variables</h3>
            <p>The list of variables names you can change: <a href="https://github.com/wolfie-tools-frontend/wolfie-tools-frontend-api/blob/master/src/global/_theme.scss" target="_blank">https://github.com/wolfie-tools-frontend/wolfie-tools-frontend-api/blob/master/src/global/_theme.scss</a></p>

            <h3>Icons</h3>
            <p>
                Wolfie Tools Frontend API’s Default Icon library: <a href="https://material.io/resources/icons/?style=baseline" target="_blank">Google Material Icons</a>
            </p>

        </div>
    );
}

