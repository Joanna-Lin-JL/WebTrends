import { ClubMember } from "../../types"

type Props = {
  member: ClubMember
}

// RosterItem takes in a prop called "member", which we destructure immediately
const RosterItem = ({
  member: { name, partyParrot, favoriteIceCream, favoritefruit, year },
}: Props) => (
  <div>
    <h2>
      {name} <img src={partyParrot} alt={`${name}'s party parrot`} />
    </h2>
    <p>
      Favorite Ice Cream Flavor: <a>{favoriteIceCream}</a>
    </p>
    <p>
      Favorite Fruit: <a>{favoritefruit}</a>
    </p>
    <p>
      Year: <a>{year}</a>
    </p>
  </div>
)

export default RosterItem
