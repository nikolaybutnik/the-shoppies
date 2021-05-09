import React, { useEffect } from 'react'
import Collapsible from 'react-collapsible'
import './SearchResults.css'

import { allNominations, newNomination, getPlot } from '../../utils/ServerCalls'
import PageNavigation from '../PageNavigation/PageNavigation'

import { IconContext } from 'react-icons'
import { FaAward } from 'react-icons/fa'

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
      allNominations(setExistingNominations)
    }
  }, [searchResults, setExistingNominations])

  const handleNomination = (e) => {
    const movie = e.target.parentNode.parentNode.parentNode
    const nomination = {
      poster: movie.children[0].src,
      title: movie.children[1].children[0].textContent,
      year: movie.children[1].children[1].textContent.slice(-4),
      imdbID: movie.id,
    }

    newNomination(e, nomination, setExistingNominations)
  }

  const disableButton = (id) => {
    const nominationsIDs = existingNominations.map((item) => item.imdbID)
    if (nominationsIDs.includes(id)) {
      return { status: 'Already nominated', disabled: true }
    } else if (existingNominations.length === 5) {
      return { status: 'List full', disabled: true }
    } else {
      return false
    }
  }

  const fetchPlot = (id) => {
    if (document.getElementById(`movieplot+${id}`).innerHTML === 'Loading...') {
      getPlot(id, 'movie')
    }
  }

  return (
    <div className="searchResults">
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
              <div className="resultContent">
                <h3>{`${item.Title}`}</h3>
                <h5>{`Year released: ${item.Year}`}</h5>
                <Collapsible
                  trigger="View Plot"
                  triggerWhenOpen="Collapse Plot"
                  onOpen={() => fetchPlot(item.imdbID)}
                >
                  <p id={`movieplot+${item.imdbID}`} className="plot">
                    Loading...
                  </p>
                </Collapsible>
                {existingNominations && !disableButton(item.imdbID).disabled ? (
                  <div style={{ display: 'flex' }}>
                    <IconContext.Provider
                      value={{ color: 'goldenrod', size: '25px' }}
                    >
                      <FaAward />
                    </IconContext.Provider>
                    <button
                      className="nominateButton"
                      onClick={(e) => {
                        handleNomination(e)
                      }}
                    >
                      Nominate!
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex' }}>
                    <IconContext.Provider
                      value={{ color: '#ccc', size: '25px' }}
                    >
                      <FaAward />
                    </IconContext.Provider>
                    <button disabled className="nominateButtonDisabled">
                      {disableButton(item.imdbID).status ===
                        'Already nominated' && 'Already Nominated!'}
                      {disableButton(item.imdbID).status === 'List full' &&
                        'Nomination Limit Reached!'}
                    </button>
                  </div>
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
