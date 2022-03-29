import logo from './logo.svg';
import './App.css';
import MyLine from './components/MyLine/MyLine';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 300,
    onRest: () => set(!flip)
  })
  return (
    <div className="App">
      <animated.div style={props}>My First React ReChart</animated.div>
      <MyLine></MyLine>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
