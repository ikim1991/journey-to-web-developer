import React from 'react';

class Navigator extends React.Component{

  createDots(){
    const max = this.props.max
    const content = []
    for(let i = max; i > 0; i--){
      if(this.props.navigator === (max - i) + 1){
        content.push(<div className="dot" key={(max-i)+1} value={(max-i)+1} style={{background: "#0080ff"}}></div>)
      } else{
        content.push(<div className="dot" key={(max-i)+1} value={(max-i)+1} onClick={this.props.clickDot}></div>)
      }
    }
    return content
  }

  render(){
    return(
      <div className="navigator w3-padding">
        <i className="fa fa-arrow-left w3-xxlarge left-arrow" onClick={this.props.clickLeft}></i>
        {this.createDots()}
        <i className="fa fa-arrow-right w3-xxlarge right-arrow" onClick={this.props.clickRight}></i>
      </div>
    )
  }
}

export default Navigator
