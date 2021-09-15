import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.backgroundColor = null;
    this.height = null;
    this.marginTop = null;
    this.border = null;
    this.fontSize = '16px';
  };

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      height: this.height,
      marginTop: this.marginTop,
      fontSize: this.fontsize,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.backgroundColor = 'white';
    this.height = '30px';
    this.marginTop = '20px';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.backgroundColor = 'white';
    this.height = '30px';
    this.marginTop = '900px';
    this.fontsize = '16px';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
    this.fontsize = '16px';
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };