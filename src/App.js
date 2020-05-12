import React from 'react';
import Title from './Containers/Title';
import TickerYear from './Components/TickerYear';
import Ticker from './Components/Ticker';
import Slider from './Containers/Slider';
import Navigator from './Components/Navigator';
import Header from './Components/Header';
import One from './Components/One';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      navigator: 1,
      max: 0
    }
  }

  setRangeMaxValue = (value) => {
    this.setState({max: parseInt(value)})
  }

  sliderRangeChange = (e) => {
    this.setState({ navigator: parseInt(e.target.value)})
  }

  onClickDot = (e) => {
    this.setState({ navigator: parseInt(e.target.getAttribute("value"))}, () => {
      console.log("Click Dot", this.state)
      document.querySelector(".slider").value = this.state.navigator
    })
  }

  onClickRight = (e) => {
    if(this.state.navigator !== 12){
      this.setState((state) => {
        return {navigator: state.navigator + 1}
      }, () => {
        document.querySelector(".slider").value = this.state.navigator
      })
    }
  }

  onClickLeft = (e) => {
    if(this.state.navigator !== 1){
      this.setState((state) => {
        return {navigator: state.navigator - 1}
      }, () => {
        document.querySelector(".slider").value = this.state.navigator
      })
    }
  }


  render(){
    return(
      <div className="App">
        <Title/>
        <Header/>
        <TickerYear />
        <Ticker />
        <Slider navigator={this.state.navigator} onSliderChange={this.sliderRangeChange} setMax={this.setRangeMaxValue}/>
        <Navigator navigator={this.state.navigator} max={this.state.max} clickDot={this.onClickDot} clickRight={this.onClickRight} clickLeft={this.onClickLeft}/>
        <One navigator={this.state.navigator}/>
      </div>
    )
  }
}

export default App;
