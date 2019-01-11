import React from 'react';
import './StarWars.css'


const Character = props => {
  return (
    <div className="char">
         <p>{props.charList.name}</p>
        <div className="elementList">
           <div>gender: {props.charList.gender}</div>
           <div>skinColor: {props.charList.skin_color}</div>
        </div>


    </div> // end div


  )}

export default Character;
