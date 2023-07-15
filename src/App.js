import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css"
import Banner from './components/Navbar/Banner/Banner';
import "./components/Navbar/Banner/Banner.css"
import RowPost from './components/Navbar/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Banner></Banner>
     <RowPost></RowPost>
    </div>
  );
}

export default App;
