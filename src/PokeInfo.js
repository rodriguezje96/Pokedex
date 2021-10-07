import React from 'react';
import { Modal, Button, } from 'react-bootstrap';
import useAPI from './hooks/useAPI';

const PokeInfo = ({ url }) => {
  const pokemon = useAPI(url);

  this.state = {
    showModal: false
  }

  handleModal(){
    this.setState({ showModal: !this.state.showModal });
  }

  return (

    <>
      <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
        <Modal-Header closeButton>
          Header
        </Modal-Header>
        <Modal-Body>
          Body
        </Modal-Body>
        <Modal-Footer>
          <Button onclick={() => this.handleModal()}>Cerrar</Button>
          <Button>Favoritos</Button>
        </Modal-Footer>
      </Modal></>

  );
}

export default PokeInfo;