import React from 'react';

const Item = (props) => {
    return(
        <div>
            <h1>{ props.content }</h1>
            <h3>{ props.detail }</h3>
            <p>{ props.createdAt }</p>
        </div>
    )
}

export default Item;