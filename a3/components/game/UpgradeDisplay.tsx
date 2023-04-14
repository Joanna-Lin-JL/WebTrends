import { Upgrade } from "../../types"

// TODO: Modify this to pass more props down from parent
type Props = {
  readonly upgrade: Upgrade
  readonly brbs: number
  readonly setBRBs: { (number): number }
  readonly upgradeCounts
  readonly setUpgradeCounts

}

const UpgradeDisplay = ({ upgrade, brbs, setBRBs, upgradeCounts, setUpgradeCounts }: Props) => {
  const purchasedCount = upgradeCounts.get(upgrade)
  const price = upgrade.basePrice

  const buyUpgrade = () => {
    if (upgrade.basePrice > brbs) return false;
    setBRBs(brbs - price);
    const newValue: Map<Upgrade, number> = upgradeCounts;
    newValue.set(upgrade, newValue.get(upgrade) + 1);
    setUpgradeCounts(new Map(newValue))
    upgrade.basePrice = upgrade.basePrice + 10

  }

  return (
    <div>
      <h3>
        {upgrade.name} [{purchasedCount}]
      </h3>
      <p>Effect: {upgrade.incomePerTick} BRBs/tick</p>
      <p>Price: {price} BRBs</p>
      {/* TODO: Disable buy button (grey out) if you can't afford upgrade */}
      <button onClick={buyUpgrade} disabled={!buyUpgrade}>Buy</button>
    </div >
  )
}

export default UpgradeDisplay
