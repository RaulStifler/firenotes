import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Nota from './Nota';

const NotasContainer = ({
  notes,
}) => (
  <Container>
    <Grid container spacing={2}>
      { notes.map((note) => (<Nota note={note} />)) }
    </Grid>
  </Container>
);

NotasContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    idNota: PropTypes.number.isRequired,
    contenidoNota: PropTypes.string.isRequired,
  })).isRequired,
};

export default NotasContainer;
