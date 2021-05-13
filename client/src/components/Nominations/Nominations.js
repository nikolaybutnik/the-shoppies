import React from 'react'
import './Nominations.css'

import { removeNomination } from '../../utils/ServerCalls'

import { IconContext } from 'react-icons'
import { TiDelete } from 'react-icons/ti'

const Nominations = ({
  props: { existingNominations, setExistingNominations },
}) => {
  const handleDelete = (e) => {
    const [, deleteID] = e.currentTarget.parentNode.id.split('+')
    removeNomination(deleteID, setExistingNominations)
  }

  return (
    <>
      {existingNominations.length === 0 && (
        <div className="noNominations nominationsWrapper">
          <div className="bannerContainer">
            <h1>~ Hall of Fame ~</h1>
            <h3>Nothing here yet!</h3>
          </div>
        </div>
      )}
      {existingNominations.length > 0 && (
        <div className="nominationsWrapper">
          <div className="bannerContainer">
            <h1>~ Hall of Fame ~</h1>
          </div>
          <div className="allNominations">
            {existingNominations &&
              existingNominations.map((item) => {
                return (
                  <div
                    id={`nomination+${item.imdbID}`}
                    key={item.imdbID}
                    className="nomination"
                  >
                    <button
                      className="deleteButton"
                      onClick={(e) => handleDelete(e)}
                    >
                      <IconContext.Provider
                        value={{ color: 'red', size: '25px' }}
                      >
                        <TiDelete />
                      </IconContext.Provider>
                    </button>
                    <div className="posterContainer">
                      <img
                        className="nominationPoster"
                        src={item.poster}
                        alt={item.title}
                      />
                    </div>
                    <div className="nominationTitle">{`${item.title} (${item.year})`}</div>
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </>
  )
}

export default Nominations
