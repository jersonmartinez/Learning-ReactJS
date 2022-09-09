import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GreetingFunction = (props) => {

    // useState
    const [age, setage] = useState(26);

    const birthday = () => {
        // Update the State.

        setage(age + 1)
    }

    return (
        <div>
            <h1>
                Hello, {props.name} from functional component!
            </h1>
            <h2>
                Your age is: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Incrementar un año
                </button>
            </div>
        </div>
    );
};

GreetingFunction.propTypes = {
    name: PropTypes.string
};

export default GreetingFunction;