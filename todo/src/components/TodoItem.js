import React from 'react';


function TodoItem(props) {


    const todo_item_style = {
        border: `2px solid ${props.item.completed ? 'green' : 'red'}`,
        background: `${props.item.completed ? 'lightgreen' : 'pink'}`,
        padding: '8px',
        lineHeight: '0px',
        borderRadius: '10px'
    }

    return(
        <div style={todo_item_style} onClick={
            event => props.dispatch({type: 'TOGGLE', id: props.item.id})
        }>
            <p>{props.item.item} {props.item.completed ? '✔' : '❌'}</p>
        </div>
    )
}


export default TodoItem