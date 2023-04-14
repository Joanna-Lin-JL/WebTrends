import { ClubMember } from "../../types"
import RosterItem from "./RosterItem"

const rosterData: ClubMember[] = [
  {
    name: "Example Member",
    netid: "abc123",
    partyParrot: "https://cultofthepartyparrot.com/parrots/shipitparrot.gif",
    favoriteIceCream: "Vanilla",
    favoritefruit: "Apple",
    year: 1
  },
  {
    name: "Bob",
    netid: "bb234",
    partyParrot: "https://cultofthepartyparrot.com/parrots/skiparrot.gif",
    favoriteIceCream: "Coffee",
    favoritefruit: "Orange",
    year: 2
  }, {
    name: "Bobby",
    netid: "bb456",
    partyParrot: "https://cultofthepartyparrot.com/parrots/hd/beerparrot.gif",
    favoriteIceCream: "Pumpkin",
    favoritefruit: "Banana",
    year: 4
  },
  {
    name: "Spongebob",
    netid: "sp123",
    partyParrot: "https://cultofthepartyparrot.com/parrots/hd/popcornparrot.gif",
    favoriteIceCream: "Cookies and Cream",
    favoritefruit: "Grapes",
    year: 3
  }
]

const Roster = () => {
  return (
    <>
      <p>This is the fruit club.</p>
      <p>It is the coolest club ever! Because it has the coolest people.</p>
      {rosterData.map((member: ClubMember) => (
        <RosterItem
          key={member.netid}
          member={member}
        />
      ))}
    </>
  );
}

export default Roster
