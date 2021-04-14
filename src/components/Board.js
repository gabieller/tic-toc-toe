//statefull with all squares
import React, { Component } from "react"
import Square from "../components/Square"

class Board extends Component {
  state = {
    boxes: [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    currentPlayer: "X",
    disable: false,
  }

  handleClick = (i, j) => {
    let newBoxes = [
      [...this.state.boxes[0]],
      [...this.state.boxes[1]],
      [...this.state.boxes[2]],
    ]
    newBoxes[i][j] = this.state.currentPlayer

    if (
      newBoxes[i][0] === newBoxes[i][1] &&
      newBoxes[i][1] === newBoxes[i][2]
    ) {
      console.log(`The winner is ${this.state.currentPlayer}`)
    } else if (
      newBoxes[0][j] === newBoxes[1][j] &&
      newBoxes[1][j] === newBoxes[2][j]
    ) {
      console.log(`The winner is ${this.state.currentPlayer}`)
    } else if (
      newBoxes[0][j] === newBoxes[1][j] &&
      newBoxes[1][j] === newBoxes[2][j]
    ) {
      console.log(`The winner is ${this.state.currentPlayer} 2 `)
    }
    //  else if (
    //   newBoxes[2][2] === newBoxes[1][1] &&
    //   newBoxes[1][1] === newBoxes[2][0]
    // ) {
    //   console.log(`The winner is ${this.state.currentPlayer} 4`)
    // }

    console.log(newBoxes[0][j])
    // console.log(newBoxes[1][1])
    // console.log(newBoxes[2][0])

    this.setState({
      currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
      boxes: newBoxes,
    })
  }

  // if boxesArrays[0][0] === boxesArrays[1][1] === boxesArrays[2][2]
  // if boxesArrays[2][2] === boxesArrays[1][1] === boxesArrays[0][0]

  // if boxesArrays[0][0] === boxesArrays[1][0] === boxesArrays[2][0]
  // if boxesArrays[0][1] === boxesArrays[1][1] === boxesArrays[2][1]
  // if boxesArrays[0][2] === boxesArrays[1][2] === boxesArrays[2][2]

  //possible winners:
  // [0][1][2]
  // [0][1][2]
  // [0][1][2]
  // ---------------------
  // [0][1][2]
  // [2][1][0]
  // ---------------------
  // [0][0][0]
  // [1][1][1]
  // [2][2][2]

  render() {
    const line1 = this.state.boxes.map((e, j) => {
      return (
        <Square
          clicked={this.handleClick}
          boxes={this.state.boxes}
          key={j}
          i={0}
          j={j}
          value={this.state.boxes[0][j]}
          disable={this.state.disable}
        />
      )
    })

    const line2 = this.state.boxes.map((e, j) => {
      return (
        <Square
          clicked={this.handleClick}
          boxes={this.state.boxes}
          key={j}
          i={1}
          j={j}
          disable={this.state.disable}
        />
      )
    })
    const line3 = this.state.boxes.map((l, j) => {
      return (
        <Square
          clicked={this.handleClick}
          boxes={this.state.boxes}
          key={j}
          i={2}
          j={j}
          disable={this.state.disable}
        />
      )
    })
    return (
      <div boxes={this.state.boxes}>
        <h1 className="font-semibold text-black">TIC TAC TOE</h1>
        <div className="">
          <div>{line1}</div>
          <div>{line2}</div>
          <div>{line3}</div>
        </div>
        <div className="pt-5 font-bold">
          The current player is: {this.state.currentPlayer}
        </div>
        <button>Restart</button>
      </div>
    )
  }
}

export default Board
