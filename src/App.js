import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, setTechs] = useState([])
  const [newTech, setNewTechs] = useState('')

  function handleAdd() {
    setTechs([...techs, newTech])
    setNewTechs('')
  }

  //componentDidMount
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs')

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs))
    }
  }, [])

  //componentDidUpdate
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs])

const techSize = useMemo(() => techs.length, [techs])

  return (
    <>
      <ul>
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTechs(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
