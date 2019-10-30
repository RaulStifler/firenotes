import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Nota = ({
  note,
}) => (
  <Grid item xs={6}>
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {note.contenidoNota}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

Nota.propTypes = {
  note: PropTypes.shape({
    idNota: PropTypes.number.isRequired,
    contenidoNota: PropTypes.string.isRequired,
  }).isRequired,
};

export default Nota;
