import React, { useEffect } from 'react';
import LocalButton from './Button';
import './MyLitButton';

function App() {
  useEffect(() => {
    document.title = 'App - 1'
  }, []);

  return (
    <div>
      <h1> Hello world I am MY APP</h1>
      <LocalButton></LocalButton>


      <div  style={{marginTop: "10px"}}>
        <my-lit-button color="red"></my-lit-button> | <my-lit-button color="blue"></my-lit-button>
      </div>

    </div>
  );
}

export default App;
