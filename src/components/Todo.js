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

    return (
        <div>
            <h1>Todo Reminder</h1>
            <TodoForm onSubmit = {addItem}/ >
            <TodoList todos={items}/>
        </div>
    )
}
