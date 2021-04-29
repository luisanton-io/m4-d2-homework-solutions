import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron';
import LatestReleases from './components/LatestReleases';
import Container from 'react-bootstrap/Container'

function App() {
  return (<>
    <MyNav />
    <MyFooter />
    <MyJumbotron />
    <Container>
      <LatestReleases />
    </Container>
  </>);
}

export default App;
