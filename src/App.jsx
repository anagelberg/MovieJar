/* Styles */
import "./App.scss";

/* Dependencies */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

/* Pages */
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviePickerPage from "./pages/MoviePickerPage/MoviePickerPage";
import DisplayJarPage from "./pages/DisplayJarPage/DisplayJarPage";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import LandingPage from "./pages/LandingPage/LandingPage";

/* Components */
import TopNav from "./components/TopNav/TopNav";
import sausageMenu from "./assets/icons/sausage-menu.svg";
import SignInModal from "./components/SignInModal/SignInModal";
import SideBar from "./components/SideBar/SideBar";
import LoadingCircle from "./components/LoadingCircle/LoadingCircle";

/* Context */
import { UserContext } from "./contexts/UserContext";


function App() {
  const { currentUser } = useContext(UserContext);

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [showSubForm, setShowSubForm] = useState(true);
  const [currentJar, setCurrentJar] = useState({});
  const [jars, setJars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log('current user', currentUser);
  //   console.log('current jar', currentJar);
  //   console.log('jars', jars)
  // }, [currentUser, currentJar, jars])


  const resetJars = async () => {

    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/jar`, { withCredentials: true });
      setJars(response.data);
      setIsLoading(false);
    }
    catch (err) {
      console.log(err);
    }

  }

  const loadJar = async (jarId) => {
    try {
      const jarData = await axios.get(`${process.env.REACT_APP_BASE_URL}/jar/${jarId}`)
      setCurrentJar(jarData.data);
      setIsLoading(false);
    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    resetJars();
    setShowSubForm(true);
    // eslint-disable-next-line
  }, [currentUser])

  const setDefaultJar = () => {
    if (Object.keys(currentJar).length === 0
      && jars.length > 0) {
      setCurrentJar(jars[0]);
    }
  }

  return (
    <>
      <BrowserRouter >
        <TopNav setShowSubForm={setShowSubForm} setIsSideBarOpen={setIsSideBarOpen} />



        {/* hide rest of page when sidebar is open on mobile */}
        {isLoading ? <LoadingCircle /> :
          < div className="page">
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
              resetJars={resetJars}
              setShowSubForm={setShowSubForm}
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
                  setDefaultJar={setDefaultJar}
                  setCurrentJar={setCurrentJar}
                  setIsSideBarOpen={setIsSideBarOpen} />} />

                <Route
                  path="/jar/:jarid"
                  element={<DisplayJarPage
                    currentJar={currentJar}
                    loadJar={loadJar}
                    setIsSideBarOpen={setIsSideBarOpen} />} />

                <Route path="/jar"
                  element={<DisplayJarPage
                    currentJar={currentJar}
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
          </div>}

        <SignInModal />

      </BrowserRouter >
    </>
  );
}

export default App;
