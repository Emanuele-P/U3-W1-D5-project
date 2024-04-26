import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import AppNavbar from './components/AppNavbar'
import AppFootbar from './components/AppFootbar'
import TVShowsHeader from './components/TvShowsHeader'
import ContentList from './components/ContentList'

function App() {
  return (
    <>
      <AppNavbar />
      <TVShowsHeader />
      <ContentList headerText={'Trending Now'} searchQuery={'Harry Potter'} />
      <ContentList headerText={'Watch It Again'} searchQuery={'Star Wars'} />
      <ContentList headerText={'New Releases'} searchQuery={'Avengers'} />
      <AppFootbar />
    </>
  )
}

export default App
