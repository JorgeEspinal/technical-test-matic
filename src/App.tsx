import './App.css';
import HeroSection from './components/organisms/HeroSection';
import LastArticlesSection from './components/organisms/LastArticlesSection';
import NavigationBar from './components/organisms/NavigationBar';
import Subsection from './components/organisms/Subsection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <Subsection />
      <LastArticlesSection />
    </div>
  );
}

export default App;
