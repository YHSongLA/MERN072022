import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const StarWarForm = () => {
    // STATE
    const [category, setCategory] = useState("people")
    const [id, setId] = useState()

    // NAVIGATE
    const navigate = useNavigate()

    // SUBMIT HANDLER
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <select onChange={(e) => setCategory(e.target.value)} name="" id="">
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <input onChange={(e) => setId(e.target.value)} type="number" />
            <button>Search</button>
        </form>
    </div>
  )
}

export default StarWarForm