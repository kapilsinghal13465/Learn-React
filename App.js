import React from 'react';
import ReactDOM from "react-dom/client";
/**
 * 
 * ReactElement(Object) -> HTML (Broser understand)
 * 
 * 
 */
 const parent = React.createElement("div", {key: "1" ,id:"parent"}, 
    [
        React.createElement("div", {id:"child", key: "2"}, 
            [
                React.createElement("h1", {key: "3"}, "Ti am h1 tag"),
                React.createElement("h2", {key: "4"}, "Ti am h2 tag")
            ]
        ),
             React.createElement("div", {id:"child2", key: "5"}, 
            [
                React.createElement("h1", {key: "6"}, "Ti am h1 tag"),
                React.createElement("h2", {key: "7"}, "Ti am h2 tag")
            ]
        )
    ]
 )

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent)