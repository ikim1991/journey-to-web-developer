import React from 'react';

class Slider extends React.Component{

  constructor(){
    super()
    this.rangeInput = React.createRef()
  }

  render(){
    return (
      <div className="slider-container">
        <input className="slider" type="range" min="1" max={this.props.max} autoFocus defaultValue={this.props.navigator} onChange={this.props.onSliderChange}/>
      </div>
    )
  }
}

export default Slider
