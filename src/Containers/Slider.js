import React from 'react';

class Slider extends React.Component{

  constructor(){
    super()
    this.rangeInput = React.createRef()
  }

  componentDidMount(){
    const rangeMax = document.querySelector(".slider").max;
    this.props.setMax(rangeMax)
  }

  render(){
    return (
      <div className="slider-container">
        <input className="slider" type="range" min="1" max="12" ref={this.rangeInput} autoFocus defaultValue={this.props.navigator} onChange={this.props.onSliderChange}/>
      </div>
    )
  }
}

export default Slider
