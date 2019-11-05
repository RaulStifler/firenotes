import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Nota from './Nota';
import FormNota from '../FormNota/index';

const NotasContainer = ({
  notes,
  addNote,
  removeNote,
}) => (
  <Container className="container">
    <Grid container>
      <FormNota addNote={addNote} />
    </Grid>
    <Grid container spacing={2}>
      { notes.map((note) => (<Nota key={note.noteId} note={note} removeNote={removeNote} />)) }
    </Grid>
  </Container>
);

NotasContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    noteId: PropTypes.string.isRequired,
    noteContent: PropTypes.string.isRequired,
  })).isRequired,
  addNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default NotasContainer;
