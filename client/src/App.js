import React, { useState, useEffect } from 'react'
import './App.css'

import Searchbar from './components/Searchbar/Searchbar'
import SearchResults from './components/SearchResults/SearchResults'
import Nominations from './components/Nominations/Nominations'
import Footer from './components/Footer/Footer'

import { IconContext } from 'react-icons'
import { BiDownArrow } from 'react-icons/bi'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [existingNominations, setExistingNominations] = useState([])
  const [viewNominations, setViewNominations] = useState(false)

  useEffect(() => {
    fetch('/allnominations', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExistingNominations(data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const props = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    currentPage,
    setCurrentPage,
    existingNominations,
    setExistingNominations,
  }

  return (
    <>
      <div className="imageContainer">
        <img src="the-shoppies-v2.png" alt="Logo" className="logo" />
      </div>
      <Searchbar props={props} />
      {existingNominations.length === 5 ? (
        <div className="viewNominations">
          <button onClick={() => setViewNominations(!viewNominations)}>
            <IconContext.Provider value={{ size: '15px' }}>
              <BiDownArrow className="arrowDown" />
            </IconContext.Provider>
            View Nominations
            <IconContext.Provider value={{ size: '15px' }}>
              <BiDownArrow className="arrowDown" />
            </IconContext.Provider>
          </button>
        </div>
      ) : (
        <div className="viewNominations">
          <button onClick={() => setViewNominations(!viewNominations)}>
            <IconContext.Provider value={{ size: '15px' }}>
              <BiDownArrow className="arrowDown" />
            </IconContext.Provider>
            View Nominations
            <IconContext.Provider value={{ size: '15px' }}>
              <BiDownArrow className="arrowDown" />
            </IconContext.Provider>
          </button>
        </div>
      )}
      {viewNominations && <Nominations props={props} />}
      <SearchResults props={props} />
      {existingNominations.length === 5 && <Footer props={props} />}
    </>
  )
}

export default App
