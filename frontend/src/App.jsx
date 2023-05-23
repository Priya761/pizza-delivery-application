import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/Homepage";
import NavBar from "./components/NavBar";
import SecondNavBar from "./components/SecondNavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SecondNavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Switch>
<Route path="/about" Component={About} exact />
</Switch> */
}
