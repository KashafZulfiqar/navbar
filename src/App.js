import React from "react";
import Navbar from "./component/navbar";
import Updates from "./component/updates";
import Para from "./Para";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Para/>
      <Updates/>
      {/* <Home /> */}
    </div>
  );
}

export default App;
