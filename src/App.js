import React from "react";

class App extends React.Component {

onFormSubmit = (evt) => {
  evt.preventDefault();
  console.log(this.refs.name.value);
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
      </div>
    );
  }
}

export default App;
