import "./App.css";
import { TwitterCard } from "./components/TwitterCard";

function App() {
  const formatAt = (username) => `@${username}`;

  const users = [
    {
      username: "thebigyovadiaz",
      name: "Yovanny Diaz",
      isFollowing: true,
    },
    {
      username: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
    },
    {
      username: "pheralb",
      name: "Pablo Heredia",
      isFollowing: true,
    },
    {
      username: "TMChein",
      name: "Tomas Chein",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map((user) => (
        <TwitterCard
          key={user.username}
          formatUsername={formatAt}
          username={user.username}
          initialIsFollowing={user.isFollowing}
        >
          {user.name}
        </TwitterCard>
      ))}
    </section>
  );
}

export default App;
