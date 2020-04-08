import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

//useState array 2 position/ 1-valor inicial 2-funcao p/atualizar

function App() {
  const [projects, setProjects] = useState(['Pedro', 'Gomes']);

  function handleAdd() {
    setProjects([...projects, 'Novo Projeto']);
    console.log(projects);
  }

  return (
    <>
      <Header title="Pedro" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;

// Componente
// Propriedade
// Estado
