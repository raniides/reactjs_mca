import React from 'react';
import {connect} from 'react-redux';
//={}+[]

class NewComp extends React.Component{
    
    /*constructor(props){
        super(props);

        this.state={
            message:"Hey how r you"
        };
    }*/

    styles ={
        fontStyle: 'italic',
        color: 'red'
    };

    /*
    ButtonChange=()=>{
        this.setState({
            message:"Bye"
        });
    };
    */

    render(){
        return(
            <div className='App'>
                <h1 style={this.styles}>{this.props.message}</h1>
                <button onClick={this.props.ButtonChange}>Click Me</button>
            </div>
        );
    }
}

//Mapping
const mapStatetoProps = State => {
    return {
        message:State.message
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        ButtonChange:()=>dispatch({type:'Message Change'})
    };
};

//export default NewComp;
export default connect(mapStatetoProps,mapDispatchtoProps)(NewComp);