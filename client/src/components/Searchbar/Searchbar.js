import React, { useEffect } from 'react'
import './Searchbar.css'

import { getMovies } from '../../utils/ServerCalls'

const Searchbar = ({
  props: { searchTerm, setSearchTerm, setSearchResults, setCurrentPage },
}) => {
  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(null)
    } else {
      setCurrentPage(1)
      getMovies(searchTerm, 1, setSearchResults)
    }
  }, [searchTerm, setCurrentPage, setSearchResults])

  return (
    <form className="searchForm">
      <input
        type="search"
        placeholder="Search for a movie..."
        onChange={(e) => {
          setSearchTerm(e.target.value.trim().replace(/ /g, '+'))
        }}
      ></input>
    </form>
  )
}

export default Searchbar
