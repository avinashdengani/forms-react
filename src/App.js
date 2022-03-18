import React from "react";

class App extends React.Component {

  state = {
    fields: {
      name: '',
      email: ''
    },
    people: []
  }; //Initial State

  onFormSubmit = (evt) => {
    evt.preventDefault();
    const people = [...this.state.people, this.state.fields];
    
    // this.setState({names : names}); //If key and value are same  then we can use following syntax
    
    this.setState({
      people,
      fields: {
         name:'',
         email: ''
      }
      });
  }

  onInputChange = (evt) => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState( {fields});
  }

  render() {
    return (
      <div>
        <h2>Sign Up Sheet</h2>
        <form onSubmit={this.onFormSubmit} >
            <input 
                name="name"
                placeholder="Enter name"
                onChange={this.onInputChange}
                value={this.state.fields.name}
            />
            <input 
                name="email"
                placeholder="Enter Email"
                onChange={this.onInputChange}
                value={this.state.fields.email}
            />
            <input type="Submit" />
        </form> 
        <div>
          <h3>Registered Names</h3>
          <ul>
            {
              this.state.people.map((people, i) => (
                <li key={i}>
                  {people.name} - {people.email}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
