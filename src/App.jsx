import "./App.css";
import Rate from "./components/rate/Rate";
import { useState } from "react";
import Result from "./components/result/Result";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();

  return (
    <>
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </>
  );
}

export default App;
