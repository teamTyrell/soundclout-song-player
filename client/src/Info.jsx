import React from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.song.artist_name}</h1>
        <h1>{this.props.song.song_name}</h1>
        <img src={this.props.song.image_url} />
      </div>
    );
  }
}