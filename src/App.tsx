import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dorian from './components/Dorian';
import Emmanuel from './components/Emmanuel';
import Ines from './components/Ines';
import Yann from './components/Yann';
import PersonCard from './components/PersonCard';

const Home: React.FC = () => {
  const people = [
    { name: 'DORIAN', imageUrl: '/dorian.jpg', path: '/dorian' },
    { name: 'Emmanuel', imageUrl: '/placeholder.jpg', path: '/emmanuel' },
    { name: 'Ines', imageUrl: 'https://i.pravatar.cc/150?img=3', path: '/ines' },
    { name: 'Yann', imageUrl: '/yann.jpg', path: '/yann' },
  ];

  return (
    // <div className="container">
      <Fragment >
        {people.map((person) => (
        <Link to={person.path} key={person.name} className="card-link">
          <PersonCard
            name={person.name}
            imageUrl={person.imageUrl}
          />
        </Link>
      ))}
      </Fragment>
      
    // </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dorian" element={<Dorian />} />
      <Route path="/emmanuel" element={<Emmanuel />} />
      <Route path="/ines" element={<Ines />} />
      <Route path="/yann" element={<Yann />} />
      <Route path="*" element={<Home />} />

    </Routes>
  );
}

export default App;