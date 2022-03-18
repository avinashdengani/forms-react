import React from "react";
import PropTypes from "prop-types";

class Field extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired
    };

    state = {
        value: this.props.value,
        error: false
    };

    static getDerivedStateFromProps(newProps) {
        return { value: newProps.value };
    }

    onChange = evt => {
        //1. store the current value in the field's state
        //2. validate the value according to validate prop function
        const name = this.props.name;
        const value = evt.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;

        this.setState({value, error});

        //3. Call parent's onchange by passing the value, so parent can pertist that in it;s own state. THis is important as parent will always be form and when we submit, the form shpuld have all the values

        this.props.onChange({name, value, error});
    }

    render() {
        return (
            <div>
                <input 
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                />

                <span style={{color: 'red'}}>{this.state.error}</span>
            </div>
        );
    }
}

export default Field;