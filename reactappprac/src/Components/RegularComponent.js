import React from "react";
//={}+[]
//Regular component

class RegularComponent extends React.Component{
    render(){
        //to check rendering if or not
        console.log("regular component renders");
        return(
            <div>
                <h6>Regular Componnet {this.props.name}</h6>
            </div>
        );
    }
}

export default RegularComponent;
