import { useMemo, useState } from 'react';
import PassportWrapper from './components/PassportWrapper';
import './App.css';

function App() {

  const audio = useMemo(() => new Audio(`${process.env.PUBLIC_URL}/music/soundtrackbackground.mp3`), []);

  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  }

  return (
    <div className="App">
      {
        Array.from({length: 15}).map(() => <div className='firefly' />)
      }
      <div class="firefly"></div>
      <PassportWrapper audio={audio} />
      <div className='pause' onClick={toggleMute}>
        {muted ? <img src={`${process.env.PUBLIC_URL}/images/mute.svg`} alt="mute" /> :
          <img src={`${process.env.PUBLIC_URL}/images/unmute.svg`} alt="unmute" />
        }
      </div>
    </div>
  );
}

export default App;
