import React from 'react'
import './Nominations.css'

const Nominations = ({
  props: { existingNominations, setExistingNominations },
}) => {
  const handleDelete = (e) => {
    const [, deleteID] = e.target.parentNode.parentNode.id.split('+')
    fetch(`/removenomination/${deleteID}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExistingNominations(data.data.remaining)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {existingNominations &&
        existingNominations.map((item) => {
          return (
            <div
              id={`nomination+${item.imdbID}`}
              key={item.imdbID}
              className="nomination"
            >
              <img
                className="nominationPoster"
                src={item.poster}
                alt={item.title}
              />
              <div>
                <h3>{`${item.title}`}</h3>
                <h5>{`Year released: ${item.year}`}</h5>
                <button onClick={(e) => handleDelete(e)}>Delete</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Nominations
