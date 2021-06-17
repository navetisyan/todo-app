import React, {useState} from 'react'

function TodoList({todos}) {

    console.log('todos==', todos);
    debugger;
    return todos.map((todo, index) => (
                <div key={index}>
                    <div key={todo.id}>
                        {todo.text}
                    </div>
                </div>
                )
            )
}

export default TodoList;