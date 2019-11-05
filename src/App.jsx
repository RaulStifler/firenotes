import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import NotasContainer from './components/NotasContainer';
import firebaseConfig from './config/config';

class App extends Component {
  // const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  // const dbFirebase = app.database().ref().child('notes');
  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   const notas = [];
  //   dbFirebase.on('child_added', (snap) => {
  //     notas.push({
  //       noteId: snap.key,
  //       noteContent: snap.val().noteContent,
  //     });
  //     setNotes(notas);
  //   });
  // }, []);
  constructor() {
    super();
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
    this.dbFirebase = this.app.database().ref().child('notes');
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    const { notes } = this.state;
    this.dbFirebase.on('child_added', (snap) => {
      notes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent,
      });
      // setNotes(notes);
      this.setState(notes);
    });
  }

  addNote(noteContent) {
    this.dbFirebase.push().set({ noteContent });
  }

  removeNote(idNote) {
    this.dbFirebase.child(idNote).remove();
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Firenotes</h1>
          <p>
            Administra notas facilmente con ReactJS y Firebase
          </p>
        </header>
        <NotasContainer notes={notes} addNote={this.addNote} removeNote={this.removeNote} />
      </div>
    );
  }
}

export default App;
