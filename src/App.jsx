import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  //   const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard  userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard   userName="goncy">
        Goncy Perez Alducar
      </TwitterFollowCard>
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
