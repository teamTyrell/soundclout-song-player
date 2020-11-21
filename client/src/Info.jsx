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
  InfoSpace,
  FlexEnd,
  InfoColumnLeft,
  InfoColumnRight,
  Blank,
  WaveView,
  Image,
  Release,
  Genre,
  NameInfo
} from './Styles.jsx';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick() {
    this.setState((state) => ({
      modal: !state.modal
    }));
  }

  render() {
    return (
      <div>
        <ArtModal open={this.state.modal} closeModal={this.onImageClick} image={this.props.song.image_url && this.props.song.image_url} name={this.props.song.song_name}></ArtModal>
        <Wrapper>
          <PlayerDiv>
            <SongInfoDiv>
              <Play src={`https://soundclout.s3.us-east-2.amazonaws.com/play+(1).png`}></Play>
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