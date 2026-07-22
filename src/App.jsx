import { useEffect, useState } from 'react'
import { beeping, playBeep } from './utils'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Global scope variables
let isInit = true;
let ringtoneReloaded = true; 
let isPause = true;
let time = {
  sec: 0,
  min: 25,
};
const listeners = new Set();

// Time logic
setInterval(() => {
  if (time.sec <= 0 && time.min <= 0 && isPause) ringtoneReloaded = false;

  if (isPause) return;
  if (time.sec <= 0 && time.min <= 0) {
    if (ringtoneReloaded) beeping();
    return;
  } else if (time.sec <= 0 && time.min > 0) {
    time.sec = 59;
    time.min--;
    return;
  }

  time.sec -= 1;
}, 1000);

// Beep test


// Main App
function App() {
  const [timeSec, setTimeSec] = useState("00");
  const [timeMin, setTimeMin] = useState("00");
  const [stopBtn, setStopBtn] = useState("START");

  useEffect(() => {
    if (!isInit) return;

    setInterval(() => {
      if (time.sec > 9) setTimeSec(`${time.sec}`);
      else setTimeSec(`0${time.sec}`)

      if (time.min > 9) setTimeMin(`${time.min}`);
      else setTimeMin(`0${time.min}`)
    }, 100);

    isInit = false;
  }, []);

  const handlePlay = () => {
    isPause = !isPause;

    playBeep();
    if (isPause) setStopBtn("START");
    else setStopBtn("STOP");
  };

  const handlePomodoro = () => {
    isPause = true;
    time.min = 25;
    time.sec = 0;
    setStopBtn("START");
  };
  const handleShortBreak = () => {
    isPause = true;
    time.min = 5;
    time.sec = 0;
    setStopBtn("START");
  };
  const handleLongBreak = () => {
    isPause = true;
    time.min = 15;
    time.sec = 0;
    setStopBtn("START");
  };

  return (
    <>
      <div className='pilot-contain'>

      <div className='pilot'>
        <div className="options">
          <button className="change-option" onClick={() => handlePomodoro()}>Pomodoro</button>
          <button className="change-option" onClick={() => handleShortBreak()}>Short Break</button>
          <button className="change-option" onClick={() => handleLongBreak()}>Long Break</button>
        </div>

        <div className="timer">{timeMin}:{timeSec}</div>
        <button className="control" onClick={() => handlePlay()}>{stopBtn}</button>
      </div>
      
      <div className="footer-credit">By Johval</div>

      </div>
    </>
  )
}

export default App
