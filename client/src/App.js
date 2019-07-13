import React from 'react';
import './App.css';

import Jobs from './Jobs'

const mockjobs=[
  {
    title: 'swe iir', company: 'google'
  }
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockjobs} />
    </div>
  );
}

export default App;
