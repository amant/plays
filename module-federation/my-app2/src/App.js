import React, { useEffect } from 'react';
import ('app1/MyLitButton');
const RemoteButton = React.lazy(() => import('app1/Button'));

function App() {
  useEffect(() => {
    document.title = 'App - 2'
  }, []);

  return (
    <div>
      <h1> Hello world I am MY APP - 2</h1>

      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>


    <div style={{marginTop: '10px'}}>
      <my-lit-button></my-lit-button> | <my-lit-button color="red"></my-lit-button> | <my-lit-button color="orange"></my-lit-button>
    </div>

    </div>
  );
}

export default App;
