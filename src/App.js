import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useContext } from 'react'
import jwtDecode from "jwt-decode";
import './App.css';
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import ProtectedHome from "./components/protectedPages/ProtectedHome";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Profile from "./components/protectedPages/profile/Profile";
import Collection from "./components/protectedPages/collection/Collection";
import AlbumDetails from "./components/protectedPages/search/AlbumDetails";
import ArtistDetails from "./components/protectedPages/search/ArtistDetails";
import AlbumEdit from "./components/protectedPages/collection/AlbumEdit";
import CollectionDetails from "./components/protectedPages/collection/CollectionDetails";
import Wishlist from "./components/protectedPages/collection/Wishlist";
import NavComp from "./components/Nav/NavComp";
import AlbumSearch from "./components/protectedPages/search/AlbumSearch";
import ArtistSearch from "./components/protectedPages/search/ArtistSearch";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Demo from "./components/Demo/Demo";

function App() {

  const {
    dispatch
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
    <div className="App">
      <ToastContainer theme="dark" />
      <Router>
        <NavComp />
          <Routes>
            <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/demo" element={<Demo />} />
            <Route path="/collection-details/:id"
              element={
                <PrivateRoute>
                  <CollectionDetails />
                </PrivateRoute>
              }
            />
            <Route path="/album-edit/:id"
              element={
                <PrivateRoute>
                  <AlbumEdit />
                </PrivateRoute>
              }
            />
            <Route path="/artist-details/:artist"
              element={
                <PrivateRoute>
                  <ArtistDetails />
                </PrivateRoute>
              }
            />
              <Route path="/album-details/:id"
                element={
                  <PrivateRoute>
                    <AlbumDetails />
                  </PrivateRoute>
                }
              />
            <Route path="/wishlist/"
              element={
                <PrivateRoute>
                  <Wishlist />
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
            <Route path="/album-search"
              element={
                <PrivateRoute>
                  <AlbumSearch />
                </PrivateRoute>
              }
            />
            <Route path="/artist-search"
              element={
                <PrivateRoute>
                  <ArtistSearch />
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
  );
}

export default App;
