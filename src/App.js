
import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';

function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu/>
      <div className='vertical_divider'></div>
      <Home/>
      <div className='vertical_divider'></div>
    </div>
  );
}

export default App;
