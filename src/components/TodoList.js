import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({id:null, value: ''});
    console.log('todos==', todos);
    debugger;

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };


    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} value={edit.value} />;
      }

    return todos.map((todo, index) => (
            <div key={index} className={todo.isComplete ? "todo-row complete": "todo-row"} >
                    <div key={todo.id}  className ="icon">
                        <input type="checkbox" id={todo.id} name={todo.id} checked={todo.isComplete} onChange={() => completeTodo(todo.id)}/>
                        {todo.text}
                    </div>
                    <button className='update-icon icon' onClick={()=> setEdit({id: todo.id, value: todo.text }) }>Update</button>
                    <div className='remove-icon icon' onClick={()=> removeTodo(todo.id)}>x</div>
                </div>
                )
            )
}

export default TodoList;