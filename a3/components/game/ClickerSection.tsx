
type Props = {
  readonly clickIncome: number
  readonly tickIncome: number
  readonly brbs: number
  readonly setBRBs: { (number): number }
}

const ClickerSection = ({ clickIncome, tickIncome, brbs, setBRBs }: Props) => {

  return (
    <div>
      <h2>Balance: ${brbs} BRBs</h2>
      <p>Income per click: {clickIncome} BRBs</p>
      <p>Income per tick: {tickIncome} BRBs</p>
      {/* Make this button do something! */}
      <button
        onClick={() => { setBRBs(brbs + 1) }
        }>Acquire BRB</button>
    </div>
  )
}

export default ClickerSection
