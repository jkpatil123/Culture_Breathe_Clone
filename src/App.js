import './App.css';
import Discover from './components/Discover';
import Event from './components/Event';
import Header from './components/Header';
import Midbox from './components/Midbox';
import Superpage from './components/Superpage';
import Card from './components/Card';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Midbox/>
      {/* <Event/> */}
      <Superpage/>
      <Discover/>
      <Card/>
      <Event />
      <Footer/>
     
    </div>
  );
}


export default App;
