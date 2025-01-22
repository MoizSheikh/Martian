import './App.scss';
import React, { useState} from 'react';
import Container from './pages/Container';

export const DataContext = React.createContext()


function App() {
const DataContextValue ={  
  
}

  return (
    <DataContext.Provider value={DataContextValue}>
      <Container/>
    </DataContext.Provider>
  );
}


export default App;
