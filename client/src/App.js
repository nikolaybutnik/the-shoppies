import React, { useState } from 'react'
import './App.css'

import Searchbar from './components/Searchbar/Searchbar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const props = {
    searchTerm,
    setSearchTerm,
  }
  return (
    <>
      <div>The Shoppies</div>
      <Searchbar props={props} />
    </>
  )
}

export default App
