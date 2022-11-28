import './App.css';
import FooterSection from './components/organisms/FooterSection';
import NavigationBar from './components/organisms/NavigationBar';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default App;
