import { Route, Routes } from 'react-router-dom'
import LandingPage from "../LandingPage";
import Header from '../Header/index'
import Footer from '../Footer/Index'
import MoviesPage from '../MoviesPage'
import SeriesPage from '../SeriesPage'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
