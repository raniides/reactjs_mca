//import of react is necessary
import React from 'react';

//={}+[]

//Class components are extended by react coponent
//its must extension
export class Class1 extends React.Component{
//in class components
//directly cant write the return and then html part
//here we have to render first, write render then return inside 
//and html inside return
render(){
    return(
        <div>
            <h4>This a Class Component</h4>
            <table>
                <thead>
                <td > 
                    <tr >
                        <th  style={{border:"1px solid"}} >Age</th>
                        <th  style={{border:"1px solid"}}>Height</th>
                    </tr>
                </td>
                </thead>
            </table>
        </div>
    )
}

}

//There is two types of export
/*One is default export where only one export is there in a single file 
and here while importing we can also rename the name*/
//export default Class1;

/* Second one is named/jus export , where you can export multiple components in
one file, its you can write export at start of class / functional defined and then
import multiple at once and here cant rename the name while importing*/

//just/named export.
export class Class2 extends React.Component{
    //in class components
    //directly cant write the return and then html part
    //here we have to render first, write render then return inside 
    //and html inside return
    render(){
        return(
            <div>
                <h5>This a Class Component</h5>
            </div>
        )
    }
    
    }
