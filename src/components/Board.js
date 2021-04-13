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

  handleClick = (i, j, value) => {
    let newBoxes = [
      [...this.state.boxes[0]],
      [...this.state.boxes[1]],
      [...this.state.boxes[2]],
    ]
    newBoxes[i][j] = this.state.currentPlayer

    // const mergedArray = newBoxes[0].concat(newBoxes[1], newBoxes[2])
    // console.log(mergedArray)

    this.setState({
      currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
      boxes: newBoxes,
      disable: true,
    })
  }

  // checkValue = (value) => {
  //   console.log(value)
  //   this.setState({
  //     disable: true,
  //   })
  // }

  render() {
    //rendering each line
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
          // onClick={this.checkValue}
          // disable={this.props.value === " "  ? this.state.disable : !this.state.disable}
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
      </div>
    )
  }
}

export default Board
