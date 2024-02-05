import './App.css'
import { useState, useEffect } from 'react'
import axios from "axios"
// components
import Fact from "./components/Fact"
import StarShipCard from "./components/StarShipCard"

function App() {
  const [starShip, setStarShip] = useState([])

  useEffect(() => {
    async function getStarShip() {
      try { 
        const response = await axios.get("https://swapi.dev/api/starships/")
        setStarShip(response.data.results)

      } catch(err) {
        console.log(err)
      }
    }
    getStarShip() 
  }, [])

  return (
    <>
    {/* <Fact /> */}
    <div>
      <h1>Starship</h1>
      { starShip.length? 
      starShip.map((starShip, index) => 
        <StarShipCard starShipData = {starShip} index={index}/>)
      : "Loading..."}
    </div>
    </>
  )
}

export default App

// return문  렌더 먼저 => useEffect 작동 
// useState 초기값이 null이라면 return 내에서 state의 초기값에 접근할 때
// null.property에 접근해서 렌더를 하려고 하겠지. 그럼 안 되지.

// how the response.data looks
// {
//   "id": "8cb9283ce2bb52532d99a9bd135bc178",
//   "text": "John Lennon`s first girlfriend was named Thelma Pickles.",
//   "source": "djtech.net",
//   "source_url": "http://www.djtech.net/humor/useless_facts.htm",
//   "language": "en",
//   "permalink": "https://uselessfacts.jsph.pl/api/v2/facts/8cb9283ce2bb52532d99a9bd135bc178"
// }