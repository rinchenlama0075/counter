import React from 'react';

const Greeting = (props) => {
    return (
    
    <p> 
        Hello {props.name}! Your counter has been set to: {props.value}!
    </p>
    );
}

export default Greeting;
