import React from 'react';

//={}+[]
//higher Order comp
import UpdatedComp from './HigherOrderComp';

class Counterhover extends React.Component{

    constructor(props){
        super(props);

        //state
        this.state={
            count : 0
        };
    }

    //arrow function
    IncrementOnHover = () => {
        //setstate
        this.setState({count : this.state.count + 1});
    }

    render(){
        const {count} = this.state;
        return(
            <div>
                <h6>Incremnets on hover</h6>
                <button onMouseEnter={this.IncrementOnHover}> {this.props.name} Incremented to {count}</button>
            </div>
        );
    }
}

export default UpdatedComp(Counterhover);