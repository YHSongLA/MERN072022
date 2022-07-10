import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayColor = (props) => {

    const {allColors} = props

  return (
    <div className="d-flex justify-content-evenly align-items-center container">
        {
            allColors.map((color, index) => {
                return (
                    <div key={index}>
                        <p style={{backgroundColor: color, width:"100px", height:"100px"}}></p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DisplayColor