import { ThirdwebProvider } from "@thirdweb-dev/react";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <ThirdwebProvider desiredChainId={5}>
      <div>
        <Home />
      </div>
    </ThirdwebProvider>
  );
}

export default App;
