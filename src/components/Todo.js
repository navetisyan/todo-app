import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import SearchBar from './SearchBar'


export default function Todo() {

    const [items, setItems] = useState([]);
    const [queryItems, setQueryItems] =  useState(items);

    const addItem = (item) => {
        if(!item.text || !item.text.trim().length){
            return;
        }
        const newList = [item, ...items];
        setItems(newList);

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
        let updatedItems = [...items].filter(item => item.id !== id);
        setItems(updatedItems);
    }

    const updateTodo = (id, newValue) => {
        if(!newValue.text || !newValue.text.trim().length){
            return;
        }

        setItems((prev) => prev.map( item => {return item.id === id ? newValue : item}));
    }

    const onSearchSubmit = (term) => {
        let foundItems  = [...items].filter((item) => item.text.includes(term));   
        setQueryItems(foundItems);
      };


    return (
        <div>
            <h1>Todo Reminder</h1>
             <div className="todo-row"> {/*className="todo-menu" */}
                <TodoForm onSubmit = {addItem}/ >
                <SearchBar onSubmit={onSearchSubmit}/>
            </div>
            <TodoList 
                    todos={queryItems.length ? queryItems : items}        
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
            />
        </div>
    )
}
