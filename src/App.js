import React from "react";
import isEmail from "validator/lib/isEmail";
import Field from './Field';

class App extends React.Component {

  state = {
    fields: {
      name: "",
      email: ""
    },
    fieldErrors: {},
    people: []
  }; //Initial State

  onFormSubmit = (evt) => {
    evt.preventDefault();

    const person = this.state.fields;
    const people = [...this.state.people];
    
    if(this.validate()) return;

    this.setState({
      people: people.concat(person),
      fields: {
         name:'',
         email: ''
      }
      });
  }

  validate = () => {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    const errorMessages = Object.keys(fieldErrors).filter(key => fieldErrors[key]);

    if(!person.name) return true;
    if(!person.email) return true;
    if(errorMessages.length) return true;

    return false;
  }

  onInputChange = ({name, value, error}) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    fields[name] = value;
    fieldErrors[name] = error;
    this.setState( {fields, fieldErrors});
  }

  render() {
    return (
      <div>
        <h2>Sign Up Sheet</h2>
        <form onSubmit={this.onFormSubmit} >
            <Field 
                name="name"
                placeholder="Enter name"
                value={this.state.fields.name}
                onChange={this.onInputChange}
                validate={val => (val ? false : 'Name Required')}
            />
            <br/>
            <br/>
            <Field 
                name="email"
                placeholder="Enter Email"
                value={this.state.fields.email}
                onChange={this.onInputChange}
                validate={val => (isEmail(val) ? false : 'Invalid Email')}
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
