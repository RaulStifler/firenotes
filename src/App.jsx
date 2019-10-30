import React, { useState } from 'react';
import './App.css';
import NotasContainer from './components/components/NotasContainer';

const App = () => {
  const [notes, setNotes] = useState([
    {
      idNota: 1,
      contenidoNota: 'Este es el contenido de la nota 1',
    },
    {
      idNota: 2,
      contenidoNota: 'Este es el contenido de la nota 2',
    },
    {
      idNota: 3,
      contenidoNota: 'Este es el contenido de la nota 3',
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firenotes</h1>
        <p>
          Administra notas facilmente con ReactJS y Firebase
        </p>
      </header>
      <NotasContainer notes={notes} />
    </div>
  );
}

export default App;
