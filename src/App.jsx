import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import { Table } from 'react-materialize'
// import { Link } from 'react-router-dom';

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

        <header className="title-broxel">
          Broxel
        </header>

        <section>
          <Table>
            <tbody>
              <tr>
                <th data-field>ID</th>
                <th data-fiel>Estado</th>
                <th data-fiel>Nombre</th>
                <th data-fiel>Fecha</th>
                <th data-fiel>Monto</th>
                <th data-fiel>Dirección</th>
                <th data-fiel>Documentos</th>
              </tr>
              {this.state.solicitudes.map(element => {
                return (
                  <tr key={element.numeroSolicitud}>
                    <td>{element.numeroSolicitud}</td>
                    <td>{element.status}</td>
                    <td>{element.nombre}</td>
                    <td>{element.fecha}</td>
                    <td>{element.monto}</td>
                    <td>{element.direccion}</td>
                    <td>Ver</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </section>
      </div>
    );
  }
}

export default App;
