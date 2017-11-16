import React from 'react';

const Item = (item)=> {
    return (
        <div>
            <h1>{item.first_name}</h1>
            <h3>Homeland: {item.homeland}</h3>
            <h3>Gender: {item.gender}</h3>
            <h3>Title: {item.title} </h3>
        </div>
    )
}

export default Item