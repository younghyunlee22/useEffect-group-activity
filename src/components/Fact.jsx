import { useState, useEffect } from 'react'
import axios from "axios"

export default function Fact() {

  const [fact, setFact] = useState(null)

  useEffect(() => {
    async function getFact() {
      try {
        const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random")
        setFact(response.data) // data는 axios가 항상 주는 것
      } catch (err) {
        console.log(err)
      }
    }
    getFact()
  }, [])

  return (
    <>
    <p>
      { fact ?
          fact.text 
          :
          "Loading.."}
    </p>
    </>
  )
}