import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <section>
        <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSuccess text="Submit" />
      </section>
    </div>  
  );
};

export default App;
