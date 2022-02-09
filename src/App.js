import './App.css';
import TopBar from './components/TopBar'
import Background from './components/BackgroundImage';
import StoreListings from './components/StoreListing';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
