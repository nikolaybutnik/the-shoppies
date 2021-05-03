import React, { useState } from 'react'
import './App.css'

import Searchbar from './components/Searchbar/Searchbar'
import SearchResults from './components/SearchResults/SearchResults'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const props = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
  }
  return (
    <>
      <div>The Shoppies</div>
      <Searchbar props={props} />
      <SearchResults props={props} />
    </>
  )
}

export default App
