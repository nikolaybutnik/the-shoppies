import React from 'react'
import Collapsible from 'react-collapsible'
import './Nominations.css'

import { removeNomination, getPlot } from '../../utils/ServerCalls'

import { IconContext } from 'react-icons'
import { TiDelete } from 'react-icons/ti'

const Nominations = ({
  props: { existingNominations, setExistingNominations },
}) => {
  const handleDelete = (e) => {
    const [, deleteID] = e.currentTarget.parentNode.id.split('+')
    removeNomination(deleteID, setExistingNominations)
  }

  // const fetchPlot = (id) => {
  //   if (
  //     document.getElementById(`nominationplot+${id}`).innerHTML === 'Loading...'
  //   ) {
  //     getPlot(id, 'nomination')
  //   }
  // }

  return (
    <div className="allNominations">
      {existingNominations &&
        existingNominations.map((item) => {
          return (
            <div
              id={`nomination+${item.imdbID}`}
              key={item.imdbID}
              className="nomination"
            >
              <button className="deleteButton" onClick={(e) => handleDelete(e)}>
                <IconContext.Provider value={{ color: 'red', size: '25px' }}>
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
              <div className="nominationTitle">{`${item.title}, ${item.year}`}</div>
              {/* <Collapsible
                  trigger="View Plot"
                  triggerWhenOpen="Collapse Plot"
                  onOpen={() => fetchPlot(item.imdbID)}
                >
                  <p id={`nominationplot+${item.imdbID}`}>Loading...</p>
                </Collapsible> */}
            </div>
          )
        })}
    </div>
  )
}

export default Nominations
