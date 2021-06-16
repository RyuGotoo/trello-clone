import React from 'react';

const Item = (props) => {
    const handleClick = (e, id) => {
        const name =  e.target.name
        if (name === 'edit') {
            console.log('EDIT', id);
        } else if (name === 'delete') {
            console.log('DELETE', id);
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