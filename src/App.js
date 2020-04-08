import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAdd() {
    const response = await api.post('projects', {
      title: 'Projeto Mobile',
      owner: 'Pedro Gomes',
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
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
//useState array 2 position/ 1-valor inicial 2-funcao p/atualizar
