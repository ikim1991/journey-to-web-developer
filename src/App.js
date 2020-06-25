import React from 'react';
import Title from './Containers/Title';
import TickerYear from './Components/TickerYear';
import Ticker from './Components/Ticker';
import Slider from './Containers/Slider';
import Navigator from './Components/Navigator';
import Header from './Components/Header';
import Content from './Components/Content';
import data from './data/content';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      navigator: 6,
      max: Object.keys(data).length
    }
  }

  sliderRangeChange = (e) => {
    this.setState({ navigator: parseInt(e.target.value)})
  }

  onClickDot = (e) => {
    this.setState({ navigator: parseInt(e.target.getAttribute("value"))}, () => {
      document.querySelector(".slider").value = this.state.navigator
    })
  }

  onClickRight = (e) => {
    if(this.state.navigator !== this.state.max){
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
        <Slider navigator={this.state.navigator} onSliderChange={this.sliderRangeChange} max={this.state.max}/>
        <Navigator navigator={this.state.navigator} max={this.state.max} clickDot={this.onClickDot} clickRight={this.onClickRight} clickLeft={this.onClickLeft}/>
        <Content
          navigator={this.state.navigator}
          header={data[this.state.navigator].header}
          summary={data[this.state.navigator].summary}
          goal={data[this.state.navigator].goal}
          accomplishments={data[this.state.navigator].accomplishments}
          url={data[this.state.navigator].url}
        />
      </div>
    )
  }
}

export default App;
