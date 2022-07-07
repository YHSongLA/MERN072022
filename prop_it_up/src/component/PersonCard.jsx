// IMPORT DEPENDENCY
import React, {Component} from 'react';


// CREATE THE COMPONENT
class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}

// EXPORT COMPONENT
export default PersonCard;