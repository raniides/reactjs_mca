import React from 'react';
//={}+[]
class Statee extends React.Component{
    constructor(props){
        super(props);

        //insiide contructor comes.
    this.state={
            name:"Simplilearn"
        };
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default Statee;

