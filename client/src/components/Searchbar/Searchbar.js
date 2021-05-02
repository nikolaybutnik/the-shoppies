import React, { useState } from 'react'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = (e, search) => {
    e.preventDefault()
    fetch(`/getmovies/${search}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={(e) => fetchData(e, searchTerm)}>
      <label htmlFor="movieSearch">Search for a movie:</label>
      <input
        type="text"
        name="movieSearch"
        onChange={(e) =>
          setSearchTerm(e.target.value.trim().replace(/ /g, '+'))
        }
      ></input>
    </form>
  )
}

export default Searchbar
