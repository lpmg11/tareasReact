import React from 'react';
import { Box, Button } from '@mui/material';

export default function AgregarTarea() {

  return <Box display="flex" justifyContent="center" alignItems="center">
  <div className='modal'>
        <h1>Agregar tarea</h1>
        <form>
          <label htmlFor="titulo">Titulo</label>
          <input name='titulo' type="text" placeholder="Titulo" />
          <label htmlFor="descripcion">Descripcion</label>
          <input name='descripcion' type="text" placeholder="Descripcion" />
          <label htmlFor='fecha_inicio'>Fecha de inicio</label>
          <input name='fecha_inicio' type="date" />
          <label htmlFor='fecha_final'>Fecha de final</label>
          <input name='fecha_final' type="date" />
          <label>Estado</label>
          <select name='estado'>
            <option value='pendiente'>Pendiente</option>
            <option value='en_progreso'>En progreso</option>
            <option value='terminado'>Terminado</option>
          </select>
          <label htmlFor='prioridad'>Prioridad</label>
          <select name='prioridad'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <Button type='submit' variant='contained' >Agregar</Button>
        </form>
  </div>
  </Box>;
}
