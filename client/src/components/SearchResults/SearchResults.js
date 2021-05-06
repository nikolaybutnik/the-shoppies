import React from 'react'
import './SearchResults.css'

import PageNavigation from '../PageNavigation/PageNavigation'

const SearchResults = ({
  props: {
    searchResults,
    setSearchResults,
    searchTerm,
    currentPage,
    setCurrentPage,
  },
}) => {
  const handleNomination = (e) => {
    const movie = e.target.parentNode.parentNode
    const newNomination = {
      poster: movie.children[0].src,
      title: movie.children[1].children[0].textContent,
      year: movie.children[1].children[1].textContent.slice(-4),
      imdbID: movie.id,
    }

    fetch('/newnomination', {
      method: 'POST',
      body: JSON.stringify(newNomination),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {searchResults &&
        searchResults.Response !== 'False' &&
        searchResults.Search.map((item) => {
          return (
            <div
              id={item.imdbID}
              className="searchResult"
              key={item.imdbID + Math.floor(Math.random() * 1000)}
            >
              <img
                className="resultPoster"
                src={
                  item.Poster !== 'N/A'
                    ? item.Poster
                    : 'https://via.placeholder.com/125x185.png?text=N/A'
                }
                alt={item.Title}
              />
              <div>
                <h3>{`${item.Title}`}</h3>
                <h5>{`Year released: ${item.Year}`}</h5>
                <button
                  onClick={(e) => {
                    handleNomination(e)
                  }}
                >
                  Nominate
                </button>
              </div>
            </div>
          )
        })}
      <PageNavigation
        props={{
          searchResults,
          setSearchResults,
          searchTerm,
          currentPage,
          setCurrentPage,
        }}
      />
    </div>
  )
}

export default SearchResults
