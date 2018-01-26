import React from 'react';

const Item = (item)=> {
    return (
        <div>
            <h1>{item.name}</h1>
            <h3>Class: {item.class}</h3>
            <h3>Gender: {item.gender}</h3>
            <h3>Dexterity: {item.dex} </h3>
        </div>
    )
}

export default Item