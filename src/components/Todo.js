import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


export default function Todo() {

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        if(!item.text || !item.text.trim().length){
            return;
        }

        const newList = [item, ...items];
        setItems(newList);
        console.log(...items);

    }

    const completeTodo = (id) => {
        let updatedItems = items.map(item => {
            if(item.id === id){
                item.isComplete = !item.isComplete;
            }
            return item;
        })

        setItems(updatedItems);
    }

    const removeTodo = (id) => {
        let updatedItems = [...items].filter(item => item.id !== id)

        setItems(updatedItems);
    }

    const updateTodo = (id, newValue) => {
        if(!newValue.text || !newValue.text.trim().length){
            return;
        }

        setItems((prev) => prev.map( item => {return item.id === id ? newValue : item}));
    }


    return (
        <div>
            <h1>Todo Reminder</h1>
            <TodoForm onSubmit = {addItem}/ >
            <TodoList 
                    todos={items}        
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
            />
        </div>
    )
}
