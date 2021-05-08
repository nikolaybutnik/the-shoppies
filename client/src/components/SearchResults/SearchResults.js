import React, { useEffect } from 'react'
import Collapsible from 'react-collapsible'
import './SearchResults.css'

import PageNavigation from '../PageNavigation/PageNavigation'

const SearchResults = ({
  props: {
    searchResults,
    setSearchResults,
    searchTerm,
    currentPage,
    setCurrentPage,
    existingNominations,
    setExistingNominations,
  },
}) => {
  useEffect(() => {
    if (searchResults !== null && searchResults.Response !== 'False') {
      fetch('/allnominations', {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => setExistingNominations(data.data))
        .catch((err) => console.log(err))
    }
  }, [searchResults, setExistingNominations])

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
      .then((data) => {
        if (data.data) {
          e.target.disabled = true
          setExistingNominations(data.data.all)
        }
      })
      .catch((err) => console.log(err))
  }

  const disableButton = (id) => {
    const nominationsIDs = existingNominations.map((item) => item.imdbID)
    return nominationsIDs.includes(id)
  }

  const fetchPlot = (id) => {
    if (document.getElementById(`movieplot+${id}`).innerHTML === '') {
      fetch(`/getplot/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            document.getElementById(`movieplot+${id}`).innerHTML = data.data
          }
        })
        .catch((err) => console.log(err))
    }
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
                <Collapsible
                  trigger="View Plot"
                  triggerWhenOpen="Collapse Plot"
                  transitionTime={500}
                  onOpen={() => fetchPlot(item.imdbID)}
                >
                  <p id={`movieplot+${item.imdbID}`}></p>
                </Collapsible>
                {existingNominations && !disableButton(item.imdbID) ? (
                  <button
                    onClick={(e) => {
                      handleNomination(e)
                    }}
                  >
                    Nominate
                  </button>
                ) : (
                  <button disabled>Nominate</button>
                )}
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
