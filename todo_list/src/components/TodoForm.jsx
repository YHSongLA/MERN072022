import React, {useState} from 'react'

const TodoForm = (props) => {
    const [todo, setTodo] = useState()

    // DESTRUCTURE
    const {addNewTodo} = props


    // TODO HANDLER FOR onSubmit
    const todoHandler = (e) => {
        e.preventDefault();
        addNewTodo({todo})
    }


  return (
    <div>
        <form onSubmit={todoHandler}>
            <input onChange={(e) => setTodo(e.target.value)} type="text" name="todo" id="todo" placeholder='Add todo list' />
            <button>Add</button>
        </form>
    </div>
  )
}

export default TodoForm