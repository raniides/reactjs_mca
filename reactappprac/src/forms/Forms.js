//={}+[]
import React from "react";

class Forms extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            value:''
        };
    }

    //manual binding if
    handleChange(event){
        this.setState({value:event.target.value});
    } 

    //if not manual then arrow
    handleSubmit = event => {
        alert('A name entered is:'+ this.state.value);
        event.preventDefault();
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default Forms;