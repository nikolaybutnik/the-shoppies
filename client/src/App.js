import './App.css'

import Searchbar from './components/Searchbar/Searchbar'

function App() {
  const fetchData = () => {
    fetch('/getmovies', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div>The Shoppies</div>
      <button onClick={fetchData}>Fetch Data</button>
      <Searchbar />
    </>
  )
}

export default App
