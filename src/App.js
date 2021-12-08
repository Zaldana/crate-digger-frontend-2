import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useContext } from 'react'
import jwtDecode from "jwt-decode";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import ProtectedHome from "./components/protectedPages/ProtectedHome";
import AuthContextComponent, { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Profile from "./components/protectedPages/Profile";
import Search from "./components/protectedPages/Search";
import Collection from "./components/protectedPages/Collection";

function App() {

  const {
    dispatch,
  } = useContext(AuthContext)

  useEffect(() => {

    let jwtToken = window.localStorage.getItem("jwtToken");

    if (jwtToken) {

      let decodedToken = jwtDecode(jwtToken);

      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {

        window.localStorage.removeItem("jwtToken");
        
        dispatch({ type: "LOGOUT" });

      } else {

        let decodedToken = jwtDecode(jwtToken);

        dispatch({
          type: "LOGIN",
          email: decodedToken.email,
          username: decodedToken.username,
        });
      }
    }
  }, []);

  return (
    <AuthContextComponent>
    <div className="App">
      <ToastContainer theme="colored" />

        <Router>

          <Nav />

          <Routes>

            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/search"
              element={
                <PrivateRoute>
                  <Search />
                </PrivateRoute>
              }
            />
            <Route path="/collection"
              element={
                <PrivateRoute>
                  <Collection />
                </PrivateRoute>
              }
            />
            <Route path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/protected-home"
              element={
                <PrivateRoute>
                  <ProtectedHome />
                </PrivateRoute>
              }
            />

            <Route path="/" element={<Home />} />
            <Route render={() => <h1>Not found 404</h1>} />

          </Routes>
        </Router>

    </div>
    </AuthContextComponent >
  );
}

export default App;
