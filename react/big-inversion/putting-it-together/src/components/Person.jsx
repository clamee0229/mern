import React, { Component } from 'react';


const Person = (props) => {
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>hair color: {props.hair}</p>
        </div>
    )
}

export default Person;