import './App.css';
import CarouselComponent from './components/CarouselComponent';
import PassportWrapper from './components/PassportWrapper';

function App() {
  return (
    <div className="App">
      <PassportWrapper>
        <div style={{ backgroundColor: 'red', width: '100%', height: '100%' }}></div>
      </PassportWrapper>
    </div>
  );
}

export default App;
