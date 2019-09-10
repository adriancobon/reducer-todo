export const initialState = {
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
    ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return {...state, todoList: [...state.todoList, action.payload]}
        case 'TOGGLE':
            return {...state, 
            todoList: state.todoList.map(
                item => item.id === action.id ? {...item, completed: !item.completed} : item)
            }
        case 'CLEAR_COMPLETED':
            return {...state, todoList: state.todoList.filter(item => item.completed === false)}

        default:
            return state
    }
} 