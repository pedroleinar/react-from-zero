import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Pedro" />
      <Header title="Gomes" />
      <Header title="Leinar">
        <ul>
          <li>NickName</li>
        </ul>
      </Header>
    </>
  );
}

export default App;

// Componente
// Propriedade
// Estado
