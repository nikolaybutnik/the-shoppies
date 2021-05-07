import React, { useEffect } from 'react'
import './Searchbar.css'

const Searchbar = ({
  props: { searchTerm, setSearchTerm, setSearchResults, setCurrentPage },
}) => {
  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(null)
    } else {
      setCurrentPage(1)
      fetch(`/getmovies/${searchTerm}/1`, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.data)
        })
        .catch((err) => console.log(err))
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
