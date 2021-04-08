//statefull with all squares
import React, { Component } from "react"
import Square from "../components/Square"

class Board extends Component {
  state = {
    boxes: new Array(9).fill(null), //array with three arrays corresponding to each board line
    xNext: true, //check the next player
  }

  handleClick = () => {
    //check if all boxes are completed
    //check if winning is true
  }

  render() {
    return (
      <div>
        <Square clicked={this.handleClick} />
      </div>
    )
  }
}

export default Board
