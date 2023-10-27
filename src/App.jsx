import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviePickerPage from "./pages/MoviePickerPage/MoviePickerPage";
import DisplayJarPage from "./pages/DisplayJarPage/DisplayJarPage";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import TopNav from "./components/TopNav/TopNav";
import sausageMenu from "./assets/icons/sausage-menu.svg";
import SignInModal from "./components/SignInModal/SignInModal";

import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import SideBar from "./components/SideBar/SideBar";
import axios from "axios";
import { useNavigate, Redirect } from "react-router-dom";

function App() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(null); //demo user
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [showSubForm, setShowSubForm] = useState(true);
  const [currentJar, setCurrentJar] = useState({});
  const [jars, setJars] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('current user', currentUser);
    console.log('current jar', currentJar);
    console.log('jars', jars)
  }, [currentUser, currentJar, jars])

  // Adjust default sidebar state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsSideBarOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const resetJars = async () => {

    if (currentUser?.id) {

      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${currentUser.id}/jar`, { withCredentials: true });
        setJars(response.data);
        console.log('try response app.jsx line 52', response)
      }
      catch (err) {
        console.log(err);
      }

    }

  }

  useEffect(() => {
    resetJars();
    console.log('mounted')
    setShowSubForm(true);
    // eslint-disable-next-line
  }, [currentUser])

  const setDefaultJar = () => {
    if (Object.keys(currentJar).length === 0
      && jars.length > 0) {
      setCurrentJar(jars[0]);
    }
  }


  const mobileClose = (setFalse) => {
    window.innerWidth <= 767 && setFalse(false);
  }

  const loadJar = async (jarId) => {
    try {
      const jarData = await axios.get(`${process.env.REACT_APP_BASE_URL}/jar/${jarId}`)
      setCurrentJar(jarData.data);
    }
    catch (err) {
      console.log(err)
    }
  }



  return (
    <>
      <BrowserRouter>
        <TopNav setShowSubForm={setShowSubForm} />

        {/* hide rest of page when sidebar is open on mobile */}
        <div className="page">
          <img
            className={
              isSideBarOpen
                ? "page__sidebar-menu page__sidebar-menu--hidden"
                : "page__sidebar-menu"
            }
            src={sausageMenu}
            onClick={() => {
              setIsSideBarOpen(true);
              setShowSubForm(true);
            }}
            alt="open menu icon three lines"
          />

          <SideBar
            isOpen={isSideBarOpen}
            setIsOpen={setIsSideBarOpen}
            jars={jars}
            currentUser={currentUser}
            resetJars={resetJars}
            setShowSubForm={setShowSubForm}
            mobileClose={mobileClose}
          />
          <div
            className={
              isSideBarOpen
                ? "page__content"
                : "page__content page__content--closed-sidebar"
            }
          >
            <Routes>
              <Route path="/" element={<LandingPage
                currentJar={currentJar}
                setCurrentJar={setCurrentJar}
                jars={jars}
                setDefaultJar={setDefaultJar} />} />

              <Route path="/jar"
                element={<DisplayJarPage
                  currentJar={currentJar}
                  setIsSideBarOpen={setIsSideBarOpen} />} />

              <Route
                path="/jar/:jarid"
                element={<DisplayJarPage
                  currentJar={currentJar}
                  loadJar={loadJar}
                  setIsSideBarOpen={setIsSideBarOpen} />} />

              <Route path="/search/:term" element={<AddMoviePage jars={jars} currentJar={currentJar} />} />
              <Route path="/search" element={<AddMoviePage jars={jars} currentJar={currentJar} />} />
              <Route path="/picker" element={
                <MoviePickerPage
                  jars={jars}
                  currentJar={currentJar}
                  loadJar={loadJar}
                  showSubForm={showSubForm}
                  setShowSubForm={setShowSubForm}
                />}
              />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>

        <SignInModal
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser} />

      </BrowserRouter>
    </>
  );
}

export default App;
