import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

 const Button = (props) => {
    return (
      <button onClick = {props.onClick}>
        {props.text}
      </button>
    )
  }

  const Display = (props) => {
    return (
      <div>
        {props.counter}
      </div>
    )
  }

  const PrintTitle = (props) => {
    return (
      <div className='season'>
        {props.text}
      </div>
    )
  }

function App() {
  const [countWinter, setWinterCounter] = useState(0)
  const [countSpring, setSpringCounter] = useState(0)
  const [countSummer, setSummerCounter] = useState(0)
  const [countFall, setFallCounter] = useState(0)

  const increaseWinter = () => setWinterCounter(countWinter + 1)

  const increaseSpring = () => setSpringCounter(countSpring + 1)
  
  const increaseSummer = () => setSummerCounter(countSummer + 1 )

  const increaseFall = () => setFallCounter(countFall + 1)


if(countWinter == 0 &&  countSpring == 0 &&  countSummer == 0 &&  countFall == 0 )
  return (
    <div>
      <h1>Pick your favorite season! 🗳️👀 </h1>
      <p>No data available. Cast a vote to get the ball rolling! </p>
<PrintTitle text = "Winter ☃️" />
<Button
onClick = {increaseWinter}
text = "Vote"
/>
<PrintTitle text = "Spring 🌸" />
<Button 
onClick = {increaseSpring}
text = "Vote"
/>
<PrintTitle text = "Summer ☀️" />
<Button 
onClick = {increaseSummer}
text = "Vote"
/>
<PrintTitle text = "Fall 🍁" />
<Button 
onClick = {increaseFall}
text = "Vote"
/>
    </div>
  )
else 
return (
  <div>
  <h1>Pick your favorite season! </h1>
<PrintTitle text = "Winter ☃️" />
<Display counter = {countWinter} />
<Button
onClick = {increaseWinter}
text = "Vote"
/>
<PrintTitle text = "Spring 🌸" />
<Display counter = {countSpring} />
<Button 
onClick = {increaseSpring}
text = "Vote"
/>
<PrintTitle text = "Summer ☀️" />
<Display counter = {countSummer} />
<Button 
onClick = {increaseSummer}
text = "Vote"
/>
<PrintTitle text = "Fall 🍁" />
<Display counter = {countFall} />
<Button 
onClick = {increaseFall}
text = "Vote"
/>
    </div>
  )
}

export default App
