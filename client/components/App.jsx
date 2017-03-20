import React from 'react'

import Leaflet from './Leaflet'

const App = () => {
  return (
    <div className='app'>
      <h1>React Satellite Maps!</h1>
      <select name='satellite'>
        <option>Select a satellite</option>
        <option value='6.606452974275,-68.991924851223'>International Space Station</option>
      </select>
      <Leaflet lat={51.508} lon={-0.11} />
    </div>
  )
}

export default App

