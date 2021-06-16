import React from 'react';
import axios from 'axios';

const Item = (props) => {
    const handleClick = async (e, id) => {
        const name =  e.target.name
        if (name === 'edit') {
            await axios.patch(`http://localhost:5000/items/${id}`)
        } else if (name === 'delete') {
            await axios.delete(`http://localhost:5000/items/${id}`)
        }
    }

    return (
        <div>
            <h1>{ props.content }</h1>
            <h3>{ props.detail }</h3>
            <p>{ props.createdAt }</p>
            <button name="edit" onClick={(e) => handleClick(e, props.id)}>edit</button>
            <button name="delete" onClick={(e) => handleClick(e, props.id)}>delete</button>
        </div>
    )
}

export default Item;