import React, { useState } from "react";
import { WButton, WModal, WMHeader, WMFooter, WMMain, WTable } from "wt-frontend";

import "./example.scss";
import "../main.scss";

export default function WModalPage() {
    const [modal0, setModal0] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);

    return (
        <div className="WModalPage">
            <h1>WModal</h1>
            <div className="definition">Dialog box overlaid on content.</div>
            <p>
                This component creates a customizable modal dialog, with a header, main, and footer section.
                To control the opening and closing of the modal, you need to use state.
                <br />
                Our examples utilize React Hooks in functional components rather than using states in class components.
                You can learn more about React Hooks <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">here</a>.
            </p>

            <h2>Basic Example</h2>
            <p>
                To properly use a <code>WModal</code>, you need to pass in a boolean for the <code>visible</code> prop, and have a trigger that will change the boolean variable's value.
                <br/>
                In the following example, there is a button that sets the boolean to <code>true</code> outside of the modal, and there is a button within the <code>WMFooter</code> that sets it to <code>false</code>.
            </p>

            <WButton onClick={() => setModal0(true)} color="primary">
                Show
            </WButton>
            <WModal visible={modal0}>
                <WMHeader>
                    Modal Header
                </WMHeader>
                <WMMain>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Aliquam vel enim mi. Duis eu consectetur massa, id tristique lectus.
                    <br />
                    Donec convallis viverra commodo. Pellentesque tempus auctor varius.
                    <br />
                    Curabitur placerat justo at quam aliquet fermentum.
                </WMMain>
                <WMFooter>
                    <WButton onClick={() => setModal0(false)}>
                        Close
                    </WButton>
                </WMFooter>
            </WModal>

            <p>
                
            </p>

            <hr/>

            <h2>Sections</h2>
            <p>
                There are 3 sections within a <code>WModal</code>: <code>WMHeader</code>, <code>WMMain</code>, and <code>WMFooter</code>.
                <br/>
                You are not required to use all the sections in your modals.
            </p>

            <div style={{width: "500px", border: "1px solid #ddd", borderRadius: "0"}}>
                <WMHeader style={{backgroundColor: "lightcoral"}}>
                    <b>Modal Header</b>
                </WMHeader>
                <WMMain style={{backgroundColor: "ivory"}}>
                    <b>
                    Modal Content
                    <br/>
                    Modal Content
                    <br/>
                    Modal Content
                    </b>
                </WMMain>
                <WMFooter style={{backgroundColor: "lightskyblue"}}>
                    <b>Modal Footer</b>
                </WMFooter>
            </div>

            <p>
                The following example only has a <code>WMHeader</code> and a <code>WMFooter</code>.
            </p>
            <WButton onClick={() => setModal1(true)} color="primary">
                Show
            </WButton>
            <WModal visible={modal1}>
                <WMHeader>
                    Modal Header
                </WMHeader>
                <WMFooter>
                    <WButton onClick={() => setModal1(false)}>
                        Close
                    </WButton>
                </WMFooter>
            </WModal>

            <p>
                Code
                <pre>
{`const [isVisible, setVisible] = useState(false);

<WButton onClick={() => setVisible(true)} color="primary">
    Show
</WButton>

<WModal visible={isVisible}>
    <WMHeader>
        Modal Header
    </WMHeader>
    <WMFooter>
        <WButton onClick={() => setVisible(false)}>
            Close
        </WButton>
    </WMFooter>
</WModal>`}
                </pre>
            </p>

            <h3>WMHeader</h3>
            <p>
                This section is where you place the header of your modal dialog. If you pass in a function to the <code>onClose</code> prop, 
                an X button will appear in the top right.
            </p>

            <WButton onClick={() => setModal2(true)} color="primary">
                Show
            </WButton>
            <WModal visible={modal2}>
                <WMHeader onClose={() => setModal2(false)}>
                    Modal Header
                </WMHeader>
                <WMMain>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Aliquam vel enim mi. Duis eu consectetur massa, id tristique lectus.
                    <br />
                    Donec convallis viverra commodo. Pellentesque tempus auctor varius.
                    <br />
                    Curabitur placerat justo at quam aliquet fermentum.
                </WMMain>
            </WModal>

            <p>
                Code
                <pre>
{`const [isVisible, setVisible] = useState(false);

<WButton onClick={() => setVisible(true)} color="primary">
    Show
</WButton>

<WModal visible={isVisible}>
    <WMHeader onClose={() => setVisible(false)}>
        Modal Header
    </WMHeader>
    <WMMain>
       // Content goes here
    </WMMain>
</WModal>`}
                </pre>
            </p>

            <h3>WMMain</h3>
            <p>
                This section is where you place the content of your modal dialog.
            </p>

            <h3>WMFooter</h3>
            <p>
                This section is where you place the footer of your modal dialog.
                This usually will include various action buttons.
                <br/>
                You can change the <code>float</code> prop to change the placement of the footer content.
            </p>

            <WButton onClick={() => setModal3(true)} color="primary">
                Show
            </WButton>
            <WModal visible={modal3}>
                <WMHeader>
                    Modal Header
                </WMHeader>
                <WMMain>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Aliquam vel enim mi. Duis eu consectetur massa, id tristique lectus.
                    <br />
                    Donec convallis viverra commodo. Pellentesque tempus auctor varius.
                    <br />
                    Curabitur placerat justo at quam aliquet fermentum.
                </WMMain>
                <WMFooter float="right">
                    <WButton onClick={() => setModal3(false)}>
                        Close
                    </WButton>
                </WMFooter>
            </WModal>

            <p>
                Code
                <pre>
{`const [isVisible, setVisible] = useState(false);

<WButton onClick={() => setVisible(true)} color="primary">
    Show
</WButton>

<WModal visible={isVisible}>
    <WMHeader>
        Modal Header
    </WMHeader>
    <WMMain>
       // Content goes here
    </WMMain>
    <WMFooter float="right">
        <WButton onClick={() => setVisible(false)}>
            Close
        </WButton>
    </WMFooter>
</WModal>`}
                </pre>
            </p>

            <hr/>

            <h2>Cover</h2>
            <p>
                You can pass in <code>true</code> or <code>false</code> to the <code>cover</code> prop 
                to specify whether you want a cover over the rest of your page while the <code>WModal</code> is open.
            </p>

            <WButton onClick={() => setModal4(true)} color="primary">
                Show
            </WButton>
            <WModal visible={modal4} cover={true}>
                <WMHeader>
                    Modal Header
                </WMHeader>
                <WMMain>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Aliquam vel enim mi. Duis eu consectetur massa, id tristique lectus.
                    <br />
                    Donec convallis viverra commodo. Pellentesque tempus auctor varius.
                    <br />
                    Curabitur placerat justo at quam aliquet fermentum.
                </WMMain>
                <WMFooter float="right">
                    <WButton onClick={() => setModal4(false)}>
                        Close
                    </WButton>
                </WMFooter>
            </WModal>

            <p>
                Code
                <pre>
{`const [isVisible, setVisible] = useState(false);

<WButton onClick={() => setVisible(true)} color="primary">
    Show
</WButton>

<WModal visible={isVisible} cover={true}>
    <WMHeader>
        Modal Header
    </WMHeader>
    <WMMain>
       // Content goes here
    </WMMain>
    <WMFooter float="center">
        <WButton onClick={() => setVisible(false)}>
            Close
        </WButton>
    </WMFooter>
</WModal>`}
                </pre>
            </p>

            <hr/>

            <h2>Animations</h2>
            <p>
                Our API provides some premade animations that you can apply to your <code>WModal</code> using the <code>animation</code> prop.
            </p>

            <WButton onClick={() => setModal5(true)} color="primary">
                Show
            </WButton>
            <WModal visible={modal5} cover={true} animation="slide-fade-top">
                <WMHeader>
                    Modal Header
                </WMHeader>
                <WMMain>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Aliquam vel enim mi. Duis eu consectetur massa, id tristique lectus.
                    <br />
                    Donec convallis viverra commodo. Pellentesque tempus auctor varius.
                    <br />
                    Curabitur placerat justo at quam aliquet fermentum.
                </WMMain>
                <WMFooter float="right">
                    <WButton onClick={() => setModal5(false)}>
                        Close
                    </WButton>
                </WMFooter>
            </WModal>

            <p>
                Code
                <pre>
{`const [isVisible, setVisible] = useState(false);

<WButton onClick={() => setVisible(true)} color="primary">
    Show
</WButton>

<WModal visible={isVisible} cover={true} animation="slide-fade-top">
    <WMHeader>
        Modal Header
    </WMHeader>
    <WMMain>
       // Content goes here
    </WMMain>
    <WMFooter float="center">
        <WButton onClick={() => setVisible(false)}>
            Close
        </WButton>
    </WMFooter>
</WModal>`}
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
                    <td rowSpan={3}>cover</td>
                    <td>(default)</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>true</td>
                    <td>The page under the <code>WModal</code> is covered in a color (default transparent grey)</td>
                </tr>
                <tr>
                    <td>false</td>
                    <td>The page under the <code>WModal</code> is not covered</td>
                </tr>

                <tr>
                    <td>visible</td>
                    <td>true/false</td>
                    <td>Whether the modal can be seen on the screen (value is controlled by state)</td>
                </tr>

                <tr>
                    <td rowSpan={6}>animation</td>
                    <td>(default)</td>
                    <td>No animation</td>
                </tr>
                <tr>
                    <td>fade-in</td>
                    <td>Modal fades into view</td>
                </tr>
                <tr>
                    <td>slide-fade-top</td>
                    <td>Modal slides in from above and fades into view</td>
                </tr>
                <tr>
                    <td>slide-fade-bottom</td>
                    <td>Modal slides in from below and fades into view</td>
                </tr>
                <tr>
                    <td>slide-fade-left</td>
                    <td>Modal slides in from the left and fades into view</td>
                </tr>
                <tr>
                    <td>slide-fade-right</td>
                    <td>Modal slides in from the right and fades into view</td>
                </tr>

                <tr>
                    <td rowSpan={4}>float <br/> (<code>WMFooter</code> only)</td>
                    <td>(default)</td>
                    <td>left</td>
                </tr>
                <tr>
                    <td>left</td>
                    <td>Content aligns to the left</td>
                </tr>
                <tr>
                    <td>right</td>
                    <td>Content aligns to the right</td>
                </tr>
                <tr>
                    <td>center</td>
                    <td>Content aligns to the center</td>
                </tr>

                <tr>
                    <td>onClose <br/>(<code>WMHeader</code> only)</td>
                    <td></td>
                    <td>Creates an X button on the right of the <code>WMHeader</code>, which executes the passed-in function when clicked</td>
                </tr>
            </table>
        <br/>
        </div>
    )
}