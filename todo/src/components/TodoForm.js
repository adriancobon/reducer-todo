import React, {useState, useReducer} from 'react';
import {todoReducer, initialState} from '../reducers/todoReducer'
import TodoItem from './TodoItem'

const todo_list = {
    display: 'flex',
    flexWrap: 'wrap'
}

function TodoForm() {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [currentValue, setCurrentValue] = useState('')

    const handleChange = event => {
        setCurrentValue(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        if (currentValue !== '') {
            dispatch({type: 'ADD', payload: {item: currentValue, id: Date.now(), completed: false}})
        }

        setCurrentValue('')
    }

    const handleClear = event => {
        dispatch({type: "CLEAR_COMPLETED"})
    }


    return(
        <div>

            <div style={todo_list}>

                {state.todoList.map(item => {
                    return <TodoItem dispatch={dispatch} key={item.id} item={item}/>
                })}

            </div>

            <form onSubmit={handleSubmit}>

                <input type='text' value={currentValue} onChange={handleChange}/>
                <button type='submit'>Submit</button>
                <button onClick={handleClear}>Clear</button>

            </form>

        </div>
    )
}

export default TodoForm 