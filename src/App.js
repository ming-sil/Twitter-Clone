import { useEffect } from "react";
import { firebase } from "./firebase";

function App() {
  useEffect(() => {
    console.log(firebase);
  });
  return <div>hello</div>;
}

export default App;
