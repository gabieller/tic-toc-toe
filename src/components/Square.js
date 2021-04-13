//statefull with each squares
import React from "react"
import "../styles/square.css"

const square = (props) => {
  // console.log(props.i, props.j, props.boxes)
  // console.log(props.boxes[props.i][props.j])
  return (
    <button
      className="btn bg-blue-500 square border-solid border-4 "
      onClick={() => props.clicked(props.i, props.j)}
      boxes
      value={props.value}
      disabled={props.disable}
    >
      {props.boxes[props.i][props.j]}
    </button>
  )
}

export default square
