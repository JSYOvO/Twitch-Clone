import './App.css';
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Body from './Components/Body/Body.js';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
