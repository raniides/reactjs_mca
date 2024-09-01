import React from 'react';

//Higher Order Component

//arrow function
const UpdatedComp = OriginalComp => {
    //new class created under
    class NewComp extends React.Component{
        //inside render directly retun the OriginalCOmp with changes or insertion part.
        render(){
            return <OriginalComp name = "The user"/>;
        }
    }
    return NewComp;
}

export default UpdatedComp;