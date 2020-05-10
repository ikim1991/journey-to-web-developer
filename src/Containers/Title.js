import React from 'react';

class Title extends React.Component{
  render(){
    return(
      <div className='title'>
        <h1>Chris (Ikhwan) Kim</h1>
        <h3>| Software Developer | JavaScript | React | Node.js |</h3>
        <a href="https://github.com/ikim1991" className="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        <a href="https://linkedin.com/in/ikim91/" className="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        <a href="https://instagram.com/ikim91/" className="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <br/><br/>
        <h2>From Zero to Expert - Web Developer</h2>
        <h3>A Sneak Peak of My Journey</h3>
      </div>
    )
  }
}

export default Title
