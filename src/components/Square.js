//statefull with each squares
import React from "react"
import "../styles/square.css"

const square = (props) => {
  // console.log(props.i, props.j, props.boxes)
  console.log(props.boxes[props.i][props.j])
  return (
    <button
      className="square"
      onClick={() => props.clicked(props.i, props.j)}
      boxes
    >
      {props.boxes[props.i][props.j]}
    </button>
  )
}

export default square
