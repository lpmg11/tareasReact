import React from "react";
import AgregarTarea from "../componets/AgregarTarea";
import { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import Cards from "../componets/Cards";

function Index() {

  const [openModal, setingresarTarea] = React.useState(false); 


  function modalOpen() {
    setingresarTarea(true);
  }
  function modalClose() {
    setingresarTarea(false);
  }

  return <div>
    <header>
      <h1>Tareas</h1>
    </header>
    <main>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Modal open={openModal} onClose={modalClose}>
          <AgregarTarea />
        </Modal>
      </Box>
      <Button onClick={modalOpen} variant='contained' >Agregar tarea</Button>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </main>
  </div>;
}


export default Index;