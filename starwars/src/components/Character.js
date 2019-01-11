import React from 'react';
import './StarWars.css'


const Character = props => {
  return (
    <div className="char">
    <div className="names">
         <p>{props.charList.name}</p>
    </div>
        <div className="elementList">
           <div className="gender">gender: {props.charList.gender}</div>
           <div>skinColor: {props.charList.skin_color}</div>
        </div>


    </div> // end div


  )}

export default Character;
