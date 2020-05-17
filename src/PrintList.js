import React from 'react'

export const PrintList = (props) => {
    const items = props.items;  
    const listitems =  
        items.map((item, index) => <li key={index} > {item}</li>)
    return (
      <ul>
        {listitems}
      </ul>
    );      
}