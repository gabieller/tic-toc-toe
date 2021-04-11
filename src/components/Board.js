//statefull with all squares
import React, { Component } from "react"
import Square from "../components/Square"

class Board extends Component {
  state = {
    boxes: [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ], //array with three arrays corresponding to each board line
    currentPlayer: "x", //check the next player
  }

  changePlayerHandler = (i, j) => {
    let newBoxes = [
      [...this.state.boxes[0]],
      [...this.state.boxes[1]],
      [...this.state.boxes[2]],
    ]
    newBoxes[i][j] = this.state.currentPlayer
    console.log(newBoxes)
    this.setState({
      currentPlayer: this.state.currentPlayer === "x" ? "o" : "x",
      boxes: newBoxes,
    })
  }

  render() {
    //rendering each line
    const line1 = this.state.boxes.map((e, j) => {
      return (
        <Square
          clicked={this.changePlayerHandler}
          boxes={this.state.boxes}
          key={j}
          i={0}
          j={j}
        />
      )
    })

    const line2 = this.state.boxes.map((e, j) => {
      return (
        <Square
          clicked={this.changePlayerHandler}
          boxes={this.state.boxes}
          key={j}
          i={1}
          j={j}
        />
      )
    })
    const line3 = this.state.boxes.map((l, j) => {
      return (
        <Square
          clicked={this.changePlayerHandler}
          boxes={this.state.boxes}
          key={j}
          i={2}
          j={j}
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
