import logo from './logo.svg';
import './App.css';
import React from 'react'
import NewComp from './NewComp';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      apiResponse:" "
    };
  }

  callAPI() {
    fetch('http://localhost:9001/testapi')
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}))
  };

  componentWillMount(){
    //caaling api method
    this.callAPI();
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
        {this.state.apiResponse}
        </p>
        <NewComp/>
      </header>
    </div>
  );
}
}

export default App;
