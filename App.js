// const result = document.getElementById('root');
// result.innerHTML = "Namaste Javascript";

// import React from 'react';
// import ReactDom from 'react-dom/client';


// const

import React from "react";
import ReactDOM from "react-dom/client";


const TitleComponent = ()=> (
    <div>
        This is title Element
    </div>
);

// const heading2 = (
//     <h1 id="title" key="h2">
//         Namaste react 
//     </h1>
// );

const headingh1 = React.createElement("h1",{key:'h1'},"this is h1");

const headingh2 = React.createElement("h2",{key:'h2'},"this is h2");

const headingh3 = React.createElement("h3",{key:'h3'},"this is h3");



const HeaderComponent3 = React.createElement("div",{className:'title'},[headingh1,headingh2,headingh3]);

        // React.createElement("h1",{className:'h1'},"this is h1"),
        // React.createElement("h2",{className:'h2'},"this is h2"),
        // React.createElement("h3",{className:'h3'},"this is h3"));

// React Component
// const HeaderComponent = ()=>{

//     return (
//         <div>
//         <Title />
//         <h2>This is JSX</h2>
//         <h1>Namaste React functional Component</h1>
//         </div>
//     )
// };

const HeaderComponent2 = () => (

        <div className="title">
            < TitleComponent />
            <h1 key={'h1'}>
                heading 1
            </h1>
            <h2 key={'h2'}>
                heading 2
            </h2>
            <h3 key={'h3'}>
                heading 3
            </h3>
        </div>
    
);




// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< HeaderComponent2 /> );


//Aman Edited 