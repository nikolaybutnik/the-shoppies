import React from 'react'

const Searchbar = ({ props: { searchResults, setSearchResults } }) => {
  return (
    <>
      {searchResults &&
        searchResults.Response !== 'False' &&
        searchResults.Search.map((item) => {
          return (
            <div key={item.imdbID + Math.floor(Math.random() * 100)}>
              {`${item.Title}, ${item.Year}`}
            </div>
          )
        })}
    </>
  )
}

export default Searchbar
