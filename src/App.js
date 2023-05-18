
import './App.css';
import Navbar from './Components/Navbar'; 
import Header from './Components/Header';
import Gif from './Components/Gif';
import Cards from './Components/Cards';
import Cardsdown from './Components/Cardsdown';
import Events from './Components/Events';
import PastEvent from './Components/PastEvent';
import Contact from './Components/Contact';
import Maps from './Components/Maps';
import Datascience from './Components/Datascience';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Header/>
      <Gif/>
      <Cards/>
      <br/>
      <br/>
      
      <Cardsdown/>
      <br/>
      <Datascience/>
      <br/>
      <Events/>
      <PastEvent/>
      <br/>
      <Contact/>
      <Maps/>
      
    </div>
  );
}

export default App;
