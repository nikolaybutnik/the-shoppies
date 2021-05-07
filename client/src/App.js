import React, { useState } from 'react'
import './App.css'

import Searchbar from './components/Searchbar/Searchbar'
import SearchResults from './components/SearchResults/SearchResults'
import Nominations from './components/Nominations/Nominations'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [existingNominations, setExistingNominations] = useState([])

  const props = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    currentPage,
    setCurrentPage,
    existingNominations,
    setExistingNominations,
  }

  return (
    <>
      <div>The Shoppies</div>
      <Searchbar props={props} />
      <Nominations props={props} />
      <SearchResults props={props} />
    </>
  )
}

export default App
