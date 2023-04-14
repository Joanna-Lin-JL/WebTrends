import { useEffect, useRef, useState } from "react"
import { UPGRADES_DATA, TICK } from "../../data"
import styles from "../../styles/Game.module.css"
import { Upgrade } from "../../types"
import ClickerSection from "./ClickerSection"
import UpgradeDisplay from "./UpgradeDisplay"
import UpgradesSection from "./UpgradesSection"

// This is the initial state for [upgradeCounts]
// We set all purchase counts to 0 at the beginning of the game
const initUpgrades = (): Map<Upgrade, number> => {
  const upgradesMap = new Map<Upgrade, number>()
  UPGRADES_DATA.forEach((upgrade) => upgradesMap.set(upgrade, 0))
  return upgradesMap
}

const sumPurchases = (m) => {
  let sum = 0;
  m.forEach((amt) => sum += amt);
  return sum;
}

const sumTick = (m) => {
  let sum = 0;
  for (const [key, value] of m) {
    sum += value * key.incomePerTick;
  }
  return sum;
}

const oneEach = (m) => {
  for (const [key, value] of m) {
    if (value == 0) return false;
  }
  return true;
}


const Game = () => {
  const [brbs, setBRBs] = useState(0)

  // You can store upgrade information with a Map (like dictionary)
  // with [key = upgrade] and [value = number of times purchased]
  const [upgradeCounts, setUpgradeCounts] = useState(initUpgrades())

  const clickIncome = sumPurchases(upgradeCounts)
  const tickIncome = sumTick(upgradeCounts)



  /** Ticker Section Begin: No need to touch */
  const onTick = useRef<() => void>()

  useEffect(() => {
    onTick.current = () => setBRBs((x) => x + tickIncome)
  }, [tickIncome])

  useEffect(() => {
    const ticker = setInterval(() => onTick.current(), TICK)
    return () => clearInterval(ticker)
  }, [])
  /** Ticker Section End: No need to touch */

  return (
    <div className={styles.container}>
      {/* Display '💰BRB Clicker💰' instead when you win (have purchased at least one of each upgrade) */}
      <h1>{oneEach(upgradeCounts) ? "💰BRB Clicker💰" : "BRB Clicker"}</h1>
      {oneEach(upgradeCounts) && <p> "Yayy! WON"</p>}
      {/* TOOD: Display a win message (such as <p>YOU WON! See how far you go!</p>) ONLY if you win */}
      <div className={styles.body}>
        <div className={styles.column}>
          {/*  Add more props! */}
          <ClickerSection clickIncome={clickIncome} tickIncome={tickIncome} brbs={brbs} setBRBs={setBRBs} />
        </div>
        <div className={styles.column}>
          {/* Add more props! */}
          <UpgradesSection brbs={brbs} setBRBs={setBRBs} upgradeCounts={upgradeCounts} setUpgradeCounts={setUpgradeCounts} />
        </div>
      </div>
    </div>
  )
}

export default Game
