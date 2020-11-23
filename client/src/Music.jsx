import React from 'react';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.url = props.currentSong;
    this.pause = this.pause.bind(this);
  }



  render() {

    return (
      <div>
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
      </div>
    );
  }
}

export default Music;