import React from 'react';
import styled from 'styled-components';
import ReleaseDate from './ReleaseDate.jsx';
import ArtModal from './ArtModal.jsx';
import {
  Wrapper,
  PlayerDiv,
  SongInfoDiv,
  Play,
  SongName,
  ArtistName,
  FlexEnd,
  InfoColumnLeft,
  InfoColumnRight,
  WaveView,
  Image,
  Release,
  Genre
} from './Styles.jsx';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      status: false,
      play: false,
      pause: true,
      margin: false
    }
    this.play = this.play.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick() {
    if (this.state.modal) {
      setTimeout(() => {
        this.setState((state) => ({
          modal: false,
          margin: state.margin
        }));
      }, 375)
    }
    this.setState((state) => ({
      modal: true,
      margin: !state.margin
    }));
  }

  play() {
    if (!this.state.status) {
      this.setState({ status: true })
      this.audio = new Audio(this.props.song.song_url);
      this.audio.play();
      return;
    }
    this.setState(state => ({ play: !state.play, pause: !state.pause }))
    // console.log(this.audio);
    // console.log(this.url);
    // console.log(this.props.currentSong);
    this.state.play ? this.audio.play() : this.audio.pause();
  }

  render() {
    return (
      <div>
        <ArtModal margin={this.state.margin} open={this.state.modal} closeModal={this.onImageClick} image={this.props.song.image_url && this.props.song.image_url} name={this.props.song.song_name}></ArtModal>
        <Wrapper>
          <PlayerDiv>
            <SongInfoDiv>
              <Play onClick={this.play} src={`https://soundclout.s3.us-east-2.amazonaws.com/play+(1).png`}></Play>
              <InfoColumnLeft>
                <ArtistName>{this.props.song.artist_name}</ArtistName>
                <SongName>{this.props.song.song_name}</SongName>
              </InfoColumnLeft>
              <FlexEnd>
                <InfoColumnRight>
                  <Release>
                    <ReleaseDate date={this.props.song.created_at}></ReleaseDate>
                  </Release>
                  <Genre># {this.props.song.genre}</Genre>
                </InfoColumnRight>
              </FlexEnd>
            </SongInfoDiv>
            <WaveView src={`https://soundclout.s3.us-east-2.amazonaws.com/soundcloud+wave.png`}></WaveView>
          </PlayerDiv>
          <div>
            <Image src={this.props.song.image_url && this.props.song.image_url} onClick={this.onImageClick}></Image>
          </div>
        </Wrapper>
      </div>
    );
  }
}