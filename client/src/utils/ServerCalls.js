const removeNomination = (id, callback) => {
  fetch(`/removenomination/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      callback(data.data.remaining)
    })
    .catch((err) => console.log(err))
}

const getPlot = (id, type) => {
  fetch(`/getplot/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        document.getElementById(`${type}plot+${id}`).innerHTML = data.data
      }
    })
    .catch((err) => console.log(err))
}

const getMovies = (search, page, callback) => {
  fetch(`/getmovies/${search}/${page}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      callback(data.data)
    })
    .catch((err) => console.log(err))
}

const allNominations = (callback) => {
  fetch('/allnominations', {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => callback(data.data))
    .catch((err) => console.log(err))
}

const newNomination = (e, newData, callback) => {
  fetch('/newnomination', {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data) {
        e.target.disabled = true
        callback(data.data.all)
      }
    })
    .catch((err) => console.log(err))
}

export { removeNomination, getPlot, getMovies, allNominations, newNomination }
