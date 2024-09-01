import React from 'react';

//={}+[]

//Class component props
class Classprop extends React.Component{
    render(){
        return(
            <div>
                <p>hi i am {this.props.name} from {this.props.location}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
//this.props.children is used when invoking tags in araguments from parent to child
//that time .children is used
//and normal this.props.name  name of attribute is used.

export default Classprop;