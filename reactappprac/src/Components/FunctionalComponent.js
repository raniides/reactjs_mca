//In functional Component , it must return the HTML
//and contained in .js file like

//React import is must
import React from 'react';

//General Syntax of function component is Function, 
//It starts with function and then the function name()
//={}+[]
function FunctionalComponent(){ //name should be capital
    //return is must
    return <p>Functional Component </p>;
    //for single html tag div tag is not necessary only for multiple it is.
}

//There are two types of export
//Default export and just/named export
//Default export , it export only one object in a single file.
//Default export syntax
export default FunctionalComponent;

//Just/named export 
//it export mulitple object from a single file.