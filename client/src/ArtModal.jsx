import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import {
  Modal,
  Overlay,
  ModalImage,
  CloseModal,
  ModalTitle
} from './Styles.jsx';

export default function ArtModal(props) {
  if (!props.open) return null
  return (
    <Overlay onClick={props.closeModal}>
      <CloseModal>X</CloseModal>
      <div>
        <Modal onClick={(e) => {
          e.stopPropagation ? e.stopPropagation() : console.log(e);
        }}>
          <div>
            <ModalTitle>{props.name}</ModalTitle>
          </div>
          <div>
            <ModalImage src={props.image}></ModalImage>
          </div>
        </Modal>
      </div>
    </Overlay>
  )
}