import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile.js'

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        timerTick: 0
    };
    this.createGrid = this.createGrid.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.timer !== this.state.timerTick) {
      this.setState({
        timerTick: this.props.timer
      });
    }
  }

  createGrid(width) {
    let x = ~~(width / 25);
    console.log(x)
  }

  componentDidUpdate() {
      this.createGrid(this.props.manip.current.width)
  }

  componentDidMount() {
      this.setState({
        timerTick: this.props.timer
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.timerTick}</h1>
        <Tile {...this.props} context={this.props.manip.current}/>
      </div>
    );
  }
}
