import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  //   const format = (userName) => `@${userName}`;
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angelicop Durante",
      isFollowing: true,
    },
    { userName: "pheralb", name: "Pablo Hernan soto soto", isFollowing: false },
    { userName: "PacoHdezs", name: "Paco Hdez randilla", isFollowing: true },
    {
      userName: "TMChein",
      name: "Tomas Miguel alcantara XD",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard userName={userName} initialIsFollowing= {isFollowing}>
            {name}
          </TwitterFollowCard>
        );
      })}
      {/* <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="goncy">
        Goncy Perez Alducar
      </TwitterFollowCard> */}
    </section>
  );
}
//formas de utilizar props en los elementso
{
  /* <div className="App">
<TwitterFollowCard
  formatUserName={format}
  userName="midudev"
  name="Miguel Angel Duran"
/>
<TwitterFollowCard
  formatUserName={format}
  userName="goncy"
  name="Goncy"
/>
</div> */
}
