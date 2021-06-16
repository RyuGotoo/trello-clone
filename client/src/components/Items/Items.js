import React from 'react';

import Item from './Item/Item'

const testItems = [
    { content: 'walk my dog', description: 'walk around my house', createdAt: 'August 19, 1975 23:15:30' }, 
    { content: 'take a bath', description: 'wash my awesome body', createdAt: 'July 5, 1992 07:05:00' }
]

// TODO: GET ITEMS

const Items = () => {
    return (
        <div>
            {testItems.map((testItem) => {
                return (
                    <Item 
                        content = {testItem.content} 
                        description = {testItem.description}
                        createdAt = {testItem.createdAt}
                    />
                )
            })}
        </div>
    )
}

export default Items;