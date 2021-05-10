import React from 'react'
import './Footer.css'

import { IconContext } from 'react-icons'
import { FaTrophy } from 'react-icons/fa'

import Ticker from 'react-ticker'

const Footer = ({ props: { existingNominations } }) => {
  let movies = existingNominations
    .map((movie) => movie.title)
    .join(
      '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
    )
    .concat(
      '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
    )

  return (
    <div className="footerContainer">
      <h3>
        All 5 movies have been nominated!{' '}
        <IconContext.Provider value={{ color: 'goldenrod', size: '25px' }}>
          <FaTrophy />
        </IconContext.Provider>
      </h3>
      <Ticker offset="100%">
        {({ index }) => (
          <>
            <h5 style={{ margin: '1px 0 10px 0' }}>{movies}</h5>
          </>
        )}
      </Ticker>
    </div>
  )
}

export default Footer
