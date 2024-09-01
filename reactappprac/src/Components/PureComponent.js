import React from "react";

//Pure Compoment , it optimizes react code and imporoves performes.
//={}+[]

//pure component class need to extend the React.PureComponent
class PureComp extends React.PureComponent{
    render(){
        //to check rendering if or not.
        console.log("pure component renders");
        return(
            <div>
                <h6>Pure Compoment {this.props.name}</h6>
            </div>
        );
    }
}

export default PureComp;