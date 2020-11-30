import React from 'react';
import styled, { keyframes } from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  z-index: 1;
  margin: auto;
  display: flex;
  flex-direction: row;
  height: 380px;
  width: 1240px;
  background-color: grey;
  background-position: center center;
  justify-content: space-between;
  align-items: flex-start;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

const PlayerDiv = styled.div`
  flex-basis: 3 1 auto;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 27px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SongInfoDiv = styled.div`
  width: 100%;
  height: 215px;
  display: flex;
  flexDirection: row;
`;

const Play = styled.img`
  z-index: 10;
  width: 60px;
  height: 60px;
`;

const WaveProgress = () => keyframes`
  0% { width: 0px; }
  100% { width: 100%; }
`;

const WaveView = styled.div`
  z-index: 10;
  width: 815px;
  height: 100px;
  order: 3;
  position: relative;
  justify-self: flex-end;
`;

const Wave = styled.img`
  z-index: 10;
  width: 815px;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
`;

const FilledWave = styled.img`
  z-index: 25;
  width: 815px;
  height: 100px;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
`;

const FilledDiv = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  overflow: hidden;
  object-fit: cover;
  animation: ${WaveProgress} ${props => props.duration}s linear;
  animation-play-state: ${props => props.status ? 'running' : 'paused'};
`;

const SongName = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
  font-family: Interstate;
  line-height: 37px;
  padding: 4px 7px;
  color: white;
  background: black;
`;

const InfoColumnLeft = styled.div`
  margin-left: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FlexEnd = styled.div`
  margin-left: auto;
`;

const InfoColumnRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistName = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 16px;
  font-family: Interstate;
  line-height: 1.2;
  padding: 2px 7px 3px;
  color: white;
  background: black;
`;

const CloseModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
`;

const Release = styled.p`
  align-self: flex-end;
  margin-top: 0px;
  margin-bottom: 18px;
  font-size: 20px;
  font-family: Interstate;
  color: white;
  text-alignment: left;
`;

const Genre = styled.p`
  align-self: flex-end;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 25px;
  height: 24px;
  padding: 0 8px;
  line-height: 24px;
  font-size: 20px;
  font-family: Interstate;
  background: #999;
  color: white;
  text-alignment: left;
  :hover {
    background: #333;
  }
`;

const Image = styled.img`
  margin-top: 20px;
  margin-right: 20px;
  object-fit: cover;
  width:340px;
  height:340px;
`;

const ModalDrop = (margin) => keyframes`
  0% {
    margin-top: ${margin ? -800 : 76}px
  }
  100% {
    margin-top: ${margin ? 76 : -800}px;
  }
`;

const Modal = styled.div`
  margin-top: 76px;
  justify-content: center;
  padding: 25px;
  background-color: #FFF;
  z-index: 100;
  left: 445px;
  height: auto;
  animation: ${props => ModalDrop(props.margin)} 0.4s 0s cubic-bezier(.13,1.07,.5,1.01);
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0,0%,94.9%,.9);
  z-index: 50;
`;


const ModalImage = styled.img`
  object-fit: cover;
  width: 500px;
  height: 500px;
`;

const ModalTitle = styled.p`
  font-family: Interstate;
  font-size: 22px;
  line-height: 1;
  margin-top: 0px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 24px;
`;

export {
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
  Wave,
  FilledWave,
  FilledDiv,
  Release,
  Genre,
  Image,
  Modal,
  Overlay,
  ModalImage,
  CloseModal,
  ModalTitle
}