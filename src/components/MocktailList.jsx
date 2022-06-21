import React from 'react';

function MocktailList(props) {
    return (
       <div className='mocktail-container'>
            <h1>{props.name}</h1>
            <img src={props.image} />
            <p>{props.description}</p>
        </div>
    );
}

export default MocktailList;