import React, { useState } from 'react';

function App() {
const [techs, setTechs] = useState(['ReactJS', 'React Native'])
const [newTech, setNewTechs] = useState('')

function handleAdd() {
  setTechs([...techs, newTech])
  setNewTechs('')
}

  return (
    <>
      <ul>
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <input value={newTech} onChange={e => setNewTechs(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
   </>
  );
}

export default App;
