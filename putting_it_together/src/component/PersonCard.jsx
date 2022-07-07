// IMPORT DEPENDECY
import React, {Component} from 'react'

// CREATE THE COMPONENT
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: this.props.age}
    }

    clickHandler = () => {
        this.setState({ age: this.state.age+1});
    }

    render() {
        const {firstName, lastName, hairColor} = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.clickHandler}>
                    Birthday Button for {firstName} {lastName}
                </button>
            </div>
        );
    }
}

// EXPORT COMPONENT
export default PersonCard;