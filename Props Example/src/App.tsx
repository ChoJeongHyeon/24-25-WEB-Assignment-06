import "./App.css";
import { Person } from "./Props";
import Props from "./Props";
function App() {
  const persons: Person[] = [
    {
      id: 1,
      name: "이만재",
      age: 23,
    },
    {
      id: 2,
      name: "김수인",
      age: 23,
    },
  ];

  return (
    <div>
      <Props persons={persons} />
    </div>
  );
}

export default App;
