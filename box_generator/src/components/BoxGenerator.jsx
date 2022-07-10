import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");

    const colorHandler = (e) => {
        e.preventDefault();
        props.addColor(color)
        setColor("")
    }

    const inputHandler = (e) => {
        setColor(e.target.value)
    }

  return (
    <div>
        <form onSubmit={colorHandler}>
            <label className="form-label me-2">Color: </label>
            <input onChange={inputHandler} type="text" name="color" className="me-2" />
            <button className='px-2'>Add</button>
        </form>
    </div>
  )
}

export default BoxGenerator