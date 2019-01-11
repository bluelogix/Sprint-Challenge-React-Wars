import React from 'react';

const Character = props => {
  return (
    <div>
    <p>{props.charList.name}</p>
        <div className="elementList">
           <div>gender: {props.charList.gender}</div>
        </div>


    </div> // end div


  )}

export default Character;
