import React from 'react'
import './Nominations.css'

const Nominations = ({ props: { existingNominations } }) => {
  console.log(existingNominations)
  return (
    <div>
      {existingNominations &&
        existingNominations.map((item) => {
          return (
            <div key={item.imdbID} className="nomination">
              <img
                className="nominationPoster"
                src={item.poster}
                alt={item.title}
              />
              <div>
                <h3>{`${item.title}`}</h3>
                <h5>{`Year released: ${item.year}`}</h5>
                <button>Delete</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Nominations
