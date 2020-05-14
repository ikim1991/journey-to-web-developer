import React from 'react';

class Content extends React.Component{

  render(){
    return(
      <div className="content-container">
        <div className="content">
          <div className="content-header">
            <h2>{this.props.header}</h2>
          </div>
          {this.props.navigator % 2 !== 0 ?
            (
              <div className="content-main">
                <div className="content-image">
                  <img src={`journey-to-web-developer/${this.props.url}`} alt="Content" style={{width: 400, height: 400, paddingRight: 50}}/>
                </div>
                <div className="content-text">
                  <h3>{`Summary of ${this.props.header}:`}</h3>
                  <ul><li>{this.props.summary}</li></ul>
                  <h3>My Goals:</h3>
                  <ul>
                    {this.props.goal.map((goal, ind) => <li key={ind}>{goal}</li>)}
                  </ul>
                  <h3>My Accomplishments</h3>
                  <ul>
                    {this.props.accomplishments.map((accomplishment, ind) => <li key={ind}>{accomplishment}</li>)}
                  </ul>
                </div>
              </div>
            ) :
            (
              <div className="content-main">
                <div className="content-text">
                  <h3>{`Summary of ${this.props.header}:`}</h3>
                  <ul><li>{this.props.summary}</li></ul>
                  <h3>My Goals:</h3>
                  <ul>
                    {this.props.goal.map((goal, ind) => <li key={ind}>{goal}</li>)}
                  </ul>
                  <h3>My Accomplishments</h3>
                  <ul>
                    {this.props.accomplishments.map((accomplishment, ind) => <li key={ind}>{accomplishment}</li>)}
                  </ul>
                </div>
                <div className="content-image">
                  <img src={`journey-to-web-developer/${this.props.url}`} alt="Content" style={{width: 400, height: 400, paddingLeft: 50}}/>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Content
