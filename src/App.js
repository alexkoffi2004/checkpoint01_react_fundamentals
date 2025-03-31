// src/App.js
import React from 'react';
import {Card} from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
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
        <p> <span> Bonjour, {prénom}! </span> </p>
      ) : (
        <p>Bonjour !</p>
      )}
      {prénom && <img src="https://images.anandtech.com/doci/10194/X-T30_DSF4322.jpg" alt="Avatar" />}
    </div>
  );
}

export default App;
