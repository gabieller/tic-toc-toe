//statefull with all squares
import React, { Component } from "react"
import Square from "../components/Square"

class Board extends Component {
  state = {
    boxes: new Array(3).fill([" ", " ", " "]), //array with three arrays corresponding to each board line
    currentPlayer: "x", //check the next player
  }

  changePlayerHandler = (index) => {
    let newBoxes = {
      ...this.state.boxes,
    }

    // const adding = newBoxes.splice(2, 0, 'x');

    // newBoxes[index] = this.state.currentPlayer
    newBoxes[index] = this.state.currentPlayer
    console.log(index)
    this.setState({
      currentPlayer: this.state.currentPlayer === "x" ? "o" : "x",
      // boxes: newBoxes
    })
  }

  render() {
    //rendering each line
    const line1 = this.state.boxes.map((e, index) => {
      // console.log(e)
      return (
        <Square
          clicked={this.changePlayerHandler}
          value={this.state.boxes[0][index]}
          key={index}
        />
      )
    })

    const line2 = this.state.boxes.map((e, index) => {
      // console.log(e, index)
      return (
        <Square
          clicked={this.changePlayerHandler}
          value={this.state.boxes[1][index]}
          key={index}
        />
      )
    })
    const line3 = this.state.boxes.map((l, index) => {
      return (
        <Square
          clicked={this.changePlayerHandler}
          value={this.state.boxes[2][index]}
          key={index}
        />
      )
    })
    return (
      <div>
        <div>{line1}</div>
        <div>{line2}</div>
        <div>{line3}</div>
      </div>
    )
  }
}

export default Board
