import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Chit from "./components/chit";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/chit" element={<Chit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
