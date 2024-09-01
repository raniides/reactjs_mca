import React from 'react';

//={}+[]

//Higher order Comp
import UpdatedComp from './HigherOrderComp';

class Click extends React.Component{
    //Constructor
    //State and props
    constructor(props){
        super(props);
        
        //State
        this.state = {
            count:0
        };
    }

    //Function to click increament update
    //Arrow function
    UpdateClick = () => {
        //setstate property
                     //()bracket comes.
        this.setState({count : this.state.count + 1});
    }

    render(){
        const {count} = this.state;
        return(
            <div>
                <h6>Click button</h6>
                <button onClick={this.UpdateClick}> {this.props.name} Clicked {count} times</button>
            </div>
        );
    }
}

//export default Click;

/*Then after importing Higher order component while exporting this click file
export it as parameter inside the import file*/
export default UpdatedComp(Click);