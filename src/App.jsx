import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './App.css';
import NotasContainer from './components/NotasContainer';
import firebaseConfig from './config/config';

const App = () => {
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const dbFirebase = app.database().ref().child('notes');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let notas = notes;
    dbFirebase.on('child_added', (snap) => {
      notas = [
        ...notas,
        {
          noteId: snap.key,
          noteContent: snap.val().noteContent,
        },
      ];
      setNotes(notas);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dbFirebase.on('child_removed', (snap) => {
      const notees = [];
      const notas = notes;

      notas.forEach((nota, index) => {
        if (nota.noteId === snap.key) {
          notas.splice(index, 1);
        }
      });

      notas.forEach((nota) => {
        notees.push(nota);
      });
      setNotes(notees);
    });
  }, [dbFirebase, notes]);

  const addNote = (noteContent) => {
    dbFirebase.push().set({ noteContent });
  };

  const removeNote = (idNote) => {
    dbFirebase.child(idNote).remove();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firenotes</h1>
        <p>
          Administra notas facilmente con ReactJS y Firebase
        </p>
      </header>
      <NotasContainer notes={notes} addNote={addNote} removeNote={removeNote} />
    </div>
  );
};

export default App;
