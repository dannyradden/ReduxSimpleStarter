import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyClUVDem-M4VsZhjFUmhkOD91jJ7iS0fYs'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector(".container"))
