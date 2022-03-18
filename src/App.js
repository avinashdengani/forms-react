import React from "react";

class App extends React.Component {

  state = {names: [] }; //Initial State

  onFormSubmit = (evt) => {
    evt.preventDefault();

    const name = this.refs.name.value;

    const names = [...this.state.names, name];
    
    // this.setState({names : names}); //If key and value are same  then we can use following syntax
    
    this.setState({names});
    this.refs.name.value = "";
  }

  render() {
    return (
      <div>
        <h2>Sign Up Sheet</h2>
        <form onSubmit={this.onFormSubmit} >
            <input 
                type="text"
                placeholder="Enter name"
                ref="name"
            />
            <input type="Submit" />
        </form> 
        <div>
          <h3>Registered Users</h3>
          <ul>
            { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
