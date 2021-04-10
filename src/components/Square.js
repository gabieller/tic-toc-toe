//statefull with each squares
import React from "react"
import "../styles/square.css"

const square = (props) => {
  return (
    <button className="square" onClick={props.clicked} >
      {props.value}
    </button>
  )
}

export default square
