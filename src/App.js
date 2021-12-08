import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" />

        <Router>

          <Nav />

          <Routes>

            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />

            <Route path="/" element={<Home />} />
            <Route render={() => <h1>Not found 404</h1>} />

          </Routes>
        </Router>

    </div>
  );
}

export default App;
