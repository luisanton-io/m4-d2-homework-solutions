import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron';
import LatestReleases from './components/LatestReleases';

function App() {
  return (<>
    <MyNav />
    <MyFooter />
    <MyJumbotron />
    <LatestReleases />
  </>);
}

export default App;
