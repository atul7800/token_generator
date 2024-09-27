import { useState } from "react";
import "./App.css";
import TokenGenerator from "./components/TokenGenerator";
import AllTokens from "./components/AllTokens";

function App() {
  const [tokenData, setTokenData] = useState({
    noOfBlueTokens: "",
    noOfRedTokens: "",
    blueTokenPerRow: "",
    redTokenPerRow: "",
    blueTokenPrefix: "",
    redTokenPrefix: "",
  });

  return (
    <div className="appContainer" s>
      <TokenGenerator setTokenData={setTokenData} />
      <AllTokens className="all-tokens" tokenData={tokenData} />
    </div>
  );
}

export default App;
