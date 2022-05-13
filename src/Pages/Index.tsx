import React from "react";
import axios from "axios";
import AgregarTarea from "../componets/AgregarTarea";
import { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import Cards from "../componets/Cards";

function Index() {
  const [openModal, setingresarTarea] = React.useState(false);
  const [tareas, setTareas] = React.useState([]);

  const getdata = () => {
    axios.get("http://192.168.0.129:8000/api/tarea").then((res) => {
      setTareas(res.data);
    });
  };

  if (tareas.length === 0) {
    getdata();
  }

  function modalOpen() {
    setingresarTarea(true);
  }
  function modalClose() {
    setingresarTarea(false);
  }

  interface tarea {
    titulo: string;
  }

  const crearTarjeta = tareas.map((tarea: tarea) => {
    return <Cards tarea={tarea} />;
  });

  return (
    <div>
      <header>
        <h1>Tareas</h1>
      </header>
      <main>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Modal open={openModal} onClose={modalClose}>
            <AgregarTarea />
          </Modal>
        </Box>
        <Button onClick={modalOpen} variant="contained">
          Agregar tarea
        </Button>
        <div className="cards">{crearTarjeta}</div>
      </main>
    </div>
  );
}

export default Index;
