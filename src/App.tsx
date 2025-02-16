import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import { Header } from "./components/header/Header";
import Section from "./components/section/Section";
import GenericList from "./components/generic_list/GenericList";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <Header title={"Header Title"} />
      <Section>This Is The Section!</Section>

      <Counter setCount={setCount}>
        <h2>Count Is : {count}</h2>
      </Counter>

      <GenericList items={["🎍 Flower", "🎈 Balloon", "🎃 Pumpkin"]}
      render={(item) => <i>{item}</i>} />
    </div>
  );
}

export default App;
