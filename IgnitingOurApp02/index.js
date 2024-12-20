import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
        "Hello from React"
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
"div",
{ id:"parent"},
React.createElement(
    "div",
    { id:"child"},
   [ React.createElement(
        "h1",
        {},
        "I'm h1 tag"
    ),
    React.createElement(
        "h2",
        {},
        "I'm h2 tag"
    )
]
));

console.log(parent);              
root.render(parent);

