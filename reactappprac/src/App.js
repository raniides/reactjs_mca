//import logo from './logo.svg';
//import './App.css';
//={}+[]
//import default export
import Functional from "./Components/FunctionalComponent";
//while importing default syntax we can rename the name of class also.

//import just/named default 
//multiple components can be imported
import {Class1,Class2} from "./Components/ClassComponents";
//but here while importing cant rename the name

import Click from "./Components/Click";

//import { Counterhover } from "./Components/Counterhover";
import Counterhover from "./Components/Counterhover";


//parent component of pure component
import ParentComp from "./Components/ParentComp";


/*Props , here app.js is parent component and childcomponent
 imported is a child component*/
 //This is for Class Component Props
 import Classprop from "./props/ClassProp";

 //This is for Functional Component props
 import FunctionProps from "./props/FunctionProp";
import Statee from "./State/ClassState";
import Forms from "./forms/Forms";
import Routeer from "./Routing/Router";

function App() {
  return (
    //Multiple HTML tags should be written insidie the div tag ,convetional rule staisifies that
    <div>
<Routeer/>
<Forms/>
      <h1>My react tutorial started</h1>
      <h2>Doing practice</h2>
    <Functional />
    <Class1/>
    <Class2/>
    <Click/>
   <Counterhover/>
   <ParentComp/>
      
      {/* This are the attributes that will be invoked in child 
      component file using props short for properties */} 
     <Classprop name="Child1" location="Margao"/>
     <Classprop name="Child2" location="Margao">
      {/* And to inove this tag inside , we use props.children */} 
     <button>Click</button>
     </Classprop>
     <Classprop name="Child3" location="Margao">
      <p>Child Component</p>
      </Classprop>

      <FunctionProps name="Siddhi" place="Curchorem"/>
      <FunctionProps name="Shweta" place="Panaji">
        <p>I am a staff member</p>
      </FunctionProps>
      <FunctionProps name="Diksha" place="Porvorm">
        <button>Cricket Player</button>
      </FunctionProps>

      <Statee/>
      

    </div>
  );
}

export default App;
