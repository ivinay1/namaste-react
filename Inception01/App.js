// Creating React element(JS Object) of type "h1" and passing id and xyz as attributes(props) and the content of this React element is "Hello from React".

const heading = React.createElement(
                    "h1",
                    {id:"heading",xyz:"abc"},
                        "Hello from React"
                    );

// creating a root jisme yeh saare React Elements inject honge

const root = ReactDOM.createRoot(document.getElementById("root"));

// Ab hamm use karenge render method defined in React library jo convert karega iss heading react element (JS object) into a form jisko browser samjhta hai i.e., in the form of HTML element

//! console.log(heading);
//! root.render(heading);


// NESTING OF ELEMENTS IN REACT

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

