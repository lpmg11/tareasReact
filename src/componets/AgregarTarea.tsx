import React from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { realpathSync } from 'fs';

export default function AgregarTarea() {
  let titulo= React.createRef<HTMLInputElement>();
  let descripcion= React.createRef<HTMLInputElement>()
  let fecha_inicio= React.createRef<HTMLInputElement>();
  let fecha_final = React.createRef<HTMLInputElement>();
  let [estado, setEstado] = React.useState('pendiente');
  let [prioridad, setPrioridad] = React.useState('1');

  const estadoChange = (e: any) => {
    setEstado(e.target.value);
  }
  const prioridadChange = (e: any) => {
    setPrioridad(e.target.value);
  }

  let agregaTarea = (e:any) => {
    e.preventDefault();
    const tarea = {
      titulo: titulo.current!.value,
      descripcion: descripcion.current!.value,
      fecha_inicio: fecha_inicio.current!.value,
      fecha_final: fecha_final.current!.value,
      estado: estado,
      prioridad: prioridad
    };
    axios.post('http://192.168.0.129:8000/api/tarea', tarea).then(res => {
      console.log(res);
    }
    ).catch(err => {
      console.log(err);
    }
    );
  }

  return <Box display="flex" justifyContent="center" alignItems="center">
  <div className='modal'>
        <h1>Agregar tarea</h1>
        <form>
          <label htmlFor="titulo">Titulo</label>
          <input ref={titulo} name='titulo' type="text" placeholder="Titulo" />
          <label htmlFor="descripcion">Descripcion</label>
          <input ref={descripcion} name='descripcion' type="text" placeholder="Descripcion" />
          <label htmlFor='fecha_inicio'>Fecha de inicio</label>
          <input ref={fecha_inicio} name='fecha_inicio' type="date" />
          <label htmlFor='fecha_final'>Fecha de final</label>
          <input ref={fecha_final} name='fecha_final' type="date" />
          <label>Estado</label>
          <select value={estado} onChange={estadoChange} name='estado'>
            <option value='pendiente'>Pendiente</option>
            <option value='en_progreso'>En progreso</option>
            <option value='terminado'>Terminado</option>
          </select>
          <label htmlFor='prioridad'>Prioridad</label>
          <select value={prioridad} onChange={prioridadChange} name='prioridad'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <Button variant='contained' onClick={agregaTarea} >Agregar</Button>
        </form>
  </div>
  </Box>;
}
