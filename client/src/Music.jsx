import React from 'react';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      play: false,
      pause: true,
    }
    this.url = props.currentSong;
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    if (!this.state.status) {
      this.audio = new Audio(this.props.currentSong);
    }
    this.setState({ status: true, play: true, pause: false })
    console.log(this.audio);
    console.log(this.url);
    console.log(this.props.currentSong);
    this.audio.play();
  }

  pause() {
    this.setState({ play: false, pause: true })
    this.audio.pause();
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