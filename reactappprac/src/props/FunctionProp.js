import React from 'react';
//={}+[]

//Functional component props
                   //must define props inside.
function FunctionProps(props){
    //function doesnt contain render emthod
    //here this. doesnt come direct props. 
    return(
        <div>
            <h3>My name is {props.name}</h3>
            <h3>And i from {props.place}</h3>
            <h3>{props.children}</h3>
        </div>
    );
}

export default FunctionProps;
