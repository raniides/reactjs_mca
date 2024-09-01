import React from 'react';
//={}+[]
class Statee extends React.Component{

    constructor(props){
        super(props);

        this.state={
            name:"Portfolio"
        };
    }

    styles={
        fontStyle:"italic",
        color:"red"
    };

    render(){
        return(
            <div>
                <h1 style={this.styles}>{this.state.name}</h1>
            </div>
        );
    }
}

export default Statee;