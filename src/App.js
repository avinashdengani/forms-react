import React from "react";
import isEmail from "validator/lib/isEmail";

class App extends React.Component {

  state = {
    fields: {
      name: '',
      email: ''
    },
    fieldErrors: {},
    people: []
  }; //Initial State

  onFormSubmit = (evt) => {
    evt.preventDefault();
    const person = this.state.fields;
    const people = [...this.state.people];
    const fieldErrors = this.validate(person);

    this.setState({fieldErrors});
    
    if(Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: {
         name:'',
         email: ''
      }
      });
  }

  validate = person => {
    const errors = {};

    if(! person.name) errors.name = 'Name Required';
    if(! person.email) errors.email = 'Email Required';

    if(person.email && ! isEmail(person.email) ) errors.email = 'Invalid Email';

    return errors;

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
            <span style={{color: 'red'}}>{this.state.fieldErrors.name}</span>
            <br/>
            <br/>
            <input 
                name="email"
                placeholder="Enter Email"
                onChange={this.onInputChange}
                value={this.state.fields.email}
            />
            <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
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
