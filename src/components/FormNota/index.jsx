import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core';
import '../../styles/form.css';

const FormNota = ({
  addNote,
}) => {
  const [nuevaNota, setNuevaNota] = useState('');

  const handleNuevaNota = (nuevoContenido) => {
    setNuevaNota(nuevoContenido);
  };

  const saveNote = () => {
    addNote(nuevaNota);
    setNuevaNota('');
  };

  return (
    <Grid item xs={12} className="form-container">
      <FormControl fullWidth>
        <InputLabel htmlFor="my-input">Ej. Salir a correr por las mañanas</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={nuevaNota} onChange={(e) => handleNuevaNota(e.target.value)} />
        <FormHelperText id="my-helper-text">Contenido para una nueva nota.</FormHelperText>
      </FormControl>
      <Button variant="contained" color="primary" onClick={saveNote}>
        Guardar nota
      </Button>
    </Grid>
  );
};

FormNota.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default FormNota;
