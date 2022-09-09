import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greetings extends Component {
    // my_age = 30;

    constructor(props){

        super(props);
        this.state = {
            age: 26
            // age: this.my_age
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hello, {this.props.name}!
                </h1>
                <h2>    
                    Your age is: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Incrementar un año
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        // this.my_age++;
        // console.log(this.my_age);
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }      
        ))
    }
}

Greetings.propTypes = {
    name: PropTypes.string,
};

export default Greetings;