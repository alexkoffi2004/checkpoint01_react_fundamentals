// src/App.js
import React from 'react';
import {Card} from 'react-bootstrap/Card';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css'; 

const App = () => {
  const prénom = "Alex"; // Remplace par ton prénom ou laisse vide pour tester

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      {prénom ? (
        <p>Bonjour, {prénom}!</p>
      ) : (
        <p>Bonjour !</p>
      )}
      {prénom && <img src="https://images.anandtech.com/doci/10194/X-T30_DSF4322.jpg" alt="Avatar" />}
    </div>
  );
}

export default App;
