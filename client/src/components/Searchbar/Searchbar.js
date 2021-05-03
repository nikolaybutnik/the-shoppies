import React, { useEffect } from 'react'

const Searchbar = ({
  props: { searchTerm, setSearchTerm, searchResults, setSearchResults },
}) => {
  useEffect(() => {
    if (searchTerm !== '') {
      fetch(`/getmovies/${searchTerm}`, {
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
  }, [searchTerm, setSearchResults])

  useEffect(() => {
    if (searchResults !== null) {
      console.log(searchResults)
    }
  }, [searchResults])

  return (
    <form>
      <label htmlFor="movieSearch">Search for a movie:</label>
      <input
        type="text"
        name="movieSearch"
        onChange={(e) => {
          setSearchTerm(e.target.value.trim().replace(/ /g, '+'))
        }}
      ></input>
    </form>
  )
}

export default Searchbar
