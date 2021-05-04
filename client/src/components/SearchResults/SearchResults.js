import React from 'react'
import './SearchResults.css'

const Searchbar = ({ props: { searchResults, setSearchResults } }) => {
  return (
    <>
      {searchResults &&
        searchResults.Response !== 'False' &&
        searchResults.Search.map((item) => {
          return (
            <div className="searchResult">
              <img
                className="resultPoster"
                src={
                  item.Poster !== 'N/A'
                    ? item.Poster
                    : 'https://via.placeholder.com/150x222.png?text=N/A'
                }
                alt={item.Title}
              />
              <div>
                <div key={item.imdbID + Math.floor(Math.random() * 100)}>
                  {`${item.Title}`}
                </div>
                <div>{item.Year}</div>
                <button>Nominate</button>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Searchbar
