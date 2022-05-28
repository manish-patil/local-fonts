import React from 'react';
import './style.css';

const ListItems = ({ listItems, selectedListItem, onListItemChanged }) => {
    return (
        listItems.map((item) => {
            return <li key={item} style={{ fontFamily: item, listStyleType: 'none', padding: '5px' }} className='listItem' onClick={() => onListItemChanged(item)}>
                <div style={{ width: '1em' }}>
                    {
                        selectedListItem === item ? <span style={{ align: 'center', color: 'black', fontSize: '0.7em', fontFamily: '"Times New Roman", Times, serif' }}>&#10148;&nbsp;&nbsp;</span> : null
                    }
                </div>
                <div>{item}</div>
            </li>
        })
    )
}

export default ListItems;