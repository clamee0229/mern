import React, { Component } from 'react';

class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    
    render(){
        let increaseAge = () => {
            this.setState({age: this.state.age + 1})
        }
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>hair color: {this.props.hair}</p>
                <button onClick = {increaseAge}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default Person;