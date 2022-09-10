import React, { Suspense } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const AboutUs = React.lazy(() => import('./components/AboutUs'))
const Packages = React.lazy(() => import('./components/Packages'))

function App() {
  
  return (
    <div className="App">
      <Suspense fallback={<div style={{margin:"auto"}}><Button animation="grow"  variant="light" disabled><Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true"/>Loading...</Button></div>}>
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true!</h2>
      <div className="contents">
             <AboutUs />
             <Packages />
      </div>
        </Suspense>
      </div>
  );
}

export default App;
