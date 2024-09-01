import React from "react";
//import both regualr and pure component
import PureComp from "./PureComponent";
import RegularComponent from "./RegularComponent";
//={}+[]
//Parent Component handles the both components.

class ParentComp extends React.Component{
    //default contstructor for props
    constructor(props){
        super(props);

        //state method
        this.state={
            name : "Simplilearn"
        };
    }

    //Mounting methods to set intervals
    //compountDidMount() is called after react inserts component into DOM
    componentDidMount(){ 
                    //arrow function , time arguments int set interval
        setInterval(()=>{
            //setstate 
            this.setState({name : "Simplilearn"});
        },3000);
          //seconds
    }

    render(){
        //to check rendering if or not
        console.log("Parent Component renders");
        return(
            <div>
                <h6>Parent Component </h6>
                <PureComp name={this.state.name} />
                <RegularComponent name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;