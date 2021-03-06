import React, { Component } from 'react';


import Character from './Character'

function CharacterList(props) {
    return (
        <div className="char">
            {props.info.map(charList => {
        return <Character key={charList.name} charList={charList} />;
      })}
        </div>
    )
}

export default CharacterList;