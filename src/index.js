import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyClUVDem-M4VsZhjFUmhkOD91jJ7iS0fYs'


YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
  console.log(data)
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector(".container"))
