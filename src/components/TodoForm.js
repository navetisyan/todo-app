import React, {useState} from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');
    
    const addTodoItem = (e) => {
        e.preventDefault();    

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    }

    const handleChange = (e) => { 
        setInput(e.target.value)
    }

    return (
        <div>
            <form className="todo-form" onSubmit={addTodoItem}>
                <input 
                        type="text"
                        placeholder="Add Todo" 
                        value={input} 
                        name='text' 
                        className="todo-input"
                        onChange={handleChange}/>
                <button className="todo-button">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
