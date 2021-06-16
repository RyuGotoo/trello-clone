import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [item, setItem] = useState({ content:'', detail:'' })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prevItem) => {
            return { ...prevItem, [name]: value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/items', item)
            .then(res => {
                setItem({ content:'', detail:'' });
            })
    }

    return(
        <div>
            <h1>{ item.content } { item.detail }</h1> 
            <form>
                <input name="content" placeholder="content" onChange={ handleChange } value={ item.content } />
                <input name="detail" placeholder="detail" onChange={ handleChange } value={ item.detail } />
                <button onClick={ handleClick }>POST</button>
            </form>
        </div>
    )
}

export default Form;