import React from 'react'
import './PageNavigation.css'

import { getMovies } from '../../utils/ServerCalls'

const PageNavigation = ({
  props: {
    searchResults,
    setSearchResults,
    searchTerm,
    currentPage,
    setCurrentPage,
  },
}) => {
  const fetchPage = (page) => {
    getMovies(searchTerm, page, setSearchResults)
  }

  return (
    <>
      {searchResults && searchResults.Response !== 'False' && (
        <div className="pageNumberList">
          {[...Array(Math.ceil(searchResults.totalResults / 10)).keys()].map(
            (item) => {
              return (
                <div
                  key={item + 1}
                  className={`pageNumber ${
                    currentPage === item + 1 ? 'active' : ''
                  }`}
                  onClick={() => {
                    fetchPage(item + 1)
                    setCurrentPage(item + 1)
                  }}
                >
                  {item + 1}
                </div>
              )
            }
          )}
        </div>
      )}
    </>
  )
}

export default PageNavigation
