import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Feed from './components/pages/Feed'
import SearchResult from './components/pages/SearchResult'
import VideoDetails from './components/pages/VideoDetails';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path='/search/:searchQuery' element={<SearchResult />} />
        <Route path='/video/:videoId' element={<VideoDetails />} />
      </Routes>
    </>
  )
}

export default App
