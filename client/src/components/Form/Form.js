import React, { useState } from 'react';

const Form = () => {
    const [item, setItem] = useState({ content:'', description:'' })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prevItem) => {
            return { ...prevItem, [name]: value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log('button clicked');
        // TODO: POST AN ITEM
        setItem({ content:'', description:'' });
    }

    return(
        <div>
            <h1>{ item.content } { item.description }</h1> 
            <form>
                <input name="content" placeholder="content" onChange={ handleChange } value={ item.content } />
                <input name="description" placeholder="description" onChange={ handleChange } value={ item.description } />
                <button onClick={ handleClick }>POST</button>
            </form>
        </div>
    )
}

export default Form;