import React from 'react'
import './SearchResults.css'

import PageNavigation from '../PageNavigation/PageNavigation'

const Searchbar = ({
  props: { searchResults, setSearchResults, searchTerm },
}) => {
  return (
    <div>
      {searchResults &&
        searchResults.Response !== 'False' &&
        searchResults.Search.map((item) => {
          return (
            <div
              id={item.imdbID}
              className="searchResult"
              key={item.imdbID + Math.floor(Math.random() * 100)}
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
                  onClick={(e) =>
                    console.log(e.target.parentNode.parentNode.id)
                  }
                >
                  Nominate
                </button>
              </div>
            </div>
          )
        })}
      <PageNavigation props={{ searchResults, setSearchResults, searchTerm }} />
    </div>
  )
}

export default Searchbar
