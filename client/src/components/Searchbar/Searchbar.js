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
    <form>
      <label htmlFor="movieSearch">Search for a movie:</label>
      <input
        type="search"
        name="movieSearch"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value.trim().replace(/ /g, '+'))
        }}
      ></input>
    </form>
  )
}

export default Searchbar
