import React from 'react'

const Display = (props) => {

    // DESTRUCTURE
    const {allTodos} = props
    const {deleteTodo} = props

  return (
    <div>
        <ul>
            {
                allTodos.map((duty, index) => {
                    return (
                        <li key={index}>
                            {duty.todo}
                            <button onClick={(event) => deleteTodo(index)}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Display