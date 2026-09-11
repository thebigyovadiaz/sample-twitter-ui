import "./App.css";
import { TwitterCard } from "./components/TwitterCard";

function App() {
  const formatAt = (username) => `@${username}`;

  return (
    <section className="App">
      <TwitterCard
        formatUsername={formatAt}
        username={"thebigyovadiaz"}
        isFollowing={true}
      >
        Yovanny Diaz
      </TwitterCard>
      <TwitterCard
        formatUsername={formatAt}
        username={"midudev"}
        isFollowing={false}
      >
        Miguel Ángel Durán
      </TwitterCard>
    </section>
  );
}

export default App;
