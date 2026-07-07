import { useMemo, useState } from "react";

const expensiveCalculation = () => {
  let result = 0;
  for (let i = 0; i < 5e6; i++) {
    result += i;
  }
  return result;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveResult = useMemo(() => {
    return expensiveCalculation();
  }, []);

  // const expensiveResult = expensiveCalculation();

  return (
    <>
      <div
        style={{
          backgroundColor: dark ? "black" : "white",
          borderRadius: "4px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: dark ? "white" : "black" }}>Count: {counter}</h2>
        <h3 style={{ color: dark ? "white" : "black" }}>
          Result: {expensiveResult}
        </h3>
      </div>
      <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
    </>
  );
};

export default App;
