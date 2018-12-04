import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
  state = {
    solicitudes: []
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('solicitudes');
    itemsRef.on('value', snapshot => {
      let solicitudes = snapshot.val();
      this.setState({ solicitudes });
    });
  }

  render() {
    return (
      <div className="App">
        firebase
      </div>
    );
  }
}

export default App;
