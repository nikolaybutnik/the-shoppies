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
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Find your next mega hit..."
        onChange={(e) => {
          setSearchTerm(e.target.value.trim().replace(/ /g, '+'))
        }}
      ></input>
    </form>
  )
}

export default Searchbar
