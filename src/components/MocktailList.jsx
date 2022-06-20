import React from 'react';

function MocktailList(props) {
    let imgSrc = "../../public/images/" + props.image;

    return (
       <div className='mocktail-container'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <img src={imgSrc} /> 
        </div>
    );
}

export default MocktailList;