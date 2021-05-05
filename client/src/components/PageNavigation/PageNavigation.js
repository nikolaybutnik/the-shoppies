import React, { useState } from 'react'
import './PageNavigation.css'

const PageNavigation = ({
  props: { searchResults, setSearchResults, searchTerm },
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const fetchPage = (e) => {
    fetch(`/getmovies/${searchTerm}/${e.target.textContent}`, {
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

  return (
    <>
      {searchResults && searchResults.Response !== 'False' && (
        <div className="pageNumberList">
          {[...Array(Math.ceil(searchResults.totalResults / 10)).keys()].map(
            (item) => {
              return (
                <div
                  key={item + 1}
                  id={`page${item + 1}`}
                  className={`pageNumber ${
                    currentPage === item + 1 ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    fetchPage(e)
                    setCurrentPage(e.target.textContent)
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
