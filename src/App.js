import Header from './Header';
import './App.css';
import gsap from 'gsap';
import MainContent from './MainContent'
function App() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Header timeline= {timeline}/>
      <MainContent timeline= {timeline}/>
    </div>
  );
}

export default App;
