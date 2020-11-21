import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import {
  Modal,
  Overlay,
  ModalImage,
  CloseModal
} from './Styles.jsx';

export default function ArtModal(props) {
  if (!props.open) return null
  return (
    <Overlay>
      <Modal>
        <CloseModal onClick={props.closeModal}>X</CloseModal>
        <div>
          {props.name}
        </div>
        <div>
          <ModalImage src={props.image}></ModalImage>
        </div>
      </Modal>
    </Overlay>
  )
}