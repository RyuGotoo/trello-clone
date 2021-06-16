import React, { useState } from 'react';
import axios from 'axios';

import Item from './Item/Item'

const Items = () => {
    const [items, setItems] = useState([]);
    
    axios.get('http://localhost:5000/items')
        .then(res => {
            const newItems = res.data;
            setItems(newItems)
        })

    return (
        <div>
            {items.map((item) => {
                return (
                    <Item 
                        key = { item._id }
                        id = { item._id }
                        content = { item.content } 
                        detail = { item.detail }
                        createdAt = { item.createdAt }
                    />
                )
            })}
        </div>
    )
}

export default Items;