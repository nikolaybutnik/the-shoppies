import React from 'react'
import './Footer.css'

import { IconContext } from 'react-icons'
import { FaTrophy } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footerContainer">
      <h3>
        All 5 movies have been nominated!{' '}
        <IconContext.Provider value={{ color: 'goldenrod', size: '25px' }}>
          <FaTrophy />
        </IconContext.Provider>
      </h3>
    </div>
  )
}

export default Footer
