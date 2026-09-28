import React from 'react';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// React Element
const jsxHeading = <h1 id='heading'>Namsate React using jsx</h1>

// React Components
// - Class Component
// - Functional Component

// Functional Component
const HeadingComponent = () => {
    return (<h1>Namsate React</h1>)
}

const Title = () => <h1>this is heading</h1>;
const HeadComp = () => {
    return (
        <div id='container'>
        <Title/>
        <div>This is the body</div>
        </div>
    )
}

root.render(<HeadComp />)

// root.render(jsxHeading)