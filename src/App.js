import './App.css';
import Header from './component/header';
import About from './component/about';
import Experience from './component/experience';
import Education from './component/education';
import Achievement from './component/achievement';
import Language from './component/language';
import Skills from './component/skills';
import Reference from './component/reference';

function App() {
  return (
    <div className="App">
      <hr className="horizontal-line"></hr>
      <Header></Header>
      <hr className="horizontal-line"></hr>
      <div className="section">
        <div className="left-section">
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Achievement></Achievement>
        </div>
        <div className="right-section">
          <Language></Language>
          <Skills></Skills>
          <Reference></Reference>
        </div>
      </div>
      <hr className="horizontal-line"></hr>
    </div>
  );
}

export default App;
