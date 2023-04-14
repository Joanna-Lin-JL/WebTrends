import { useEffect, useRef, useState } from "react"

const TICK = 1000

const Game = () => {
  const [brbs, setBRBs] = useState(0)
  const [fresh, setFresh] = useState(0)


  // This is a mutable function so we can update what happens in each tick
  const updateTick = useRef<() => void>()

  useEffect(() => {
    updateTick.current = () => {
      { setBRBs(brbs + 1) }

      console.log(
        `This function gets updated with the brbs state variable because it is in the second argument`
      )
    }
  }, [brbs])

  // This sets a timer to run updateTick every TICK milliseconds
  useEffect(() => {
    const ticker = setInterval(() => updateTick.current(), TICK)
    return () => clearInterval(ticker)
  }, []) // <- [] means this effect runs at component load (only once!)

  return (
    <div>
      <h2>I have {brbs} BRBs.</h2>


      <button onClick={() => setBRBs(brbs + 1)}>Acquire BRB</button>

      <div>
        <h3>Hire Freshman (1 BRB/tick)</h3>
        <p>Number of freshmen: {fresh}</p>
        <p>Price: 10 BRBs</p>
        <button onClick={() => { setFresh(fresh + 1); setBRBs(brbs - 10) }}>Buy</button>
      </div>
    </div >
  )
}

export default Game
