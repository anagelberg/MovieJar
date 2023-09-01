import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviePickerPage from "./pages/MoviePickerPage/MoviePickerPage";
import DisplayJarPage from "./pages/DisplayJarPage/DisplayJarPage";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import TopNav from "./components/TopNav/TopNav";
import sausageMenu from "./assets/icons/sausage-menu.svg";

import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import SideBar from "./components/SideBar/SideBar";
import axios from "axios";

//TODO: fix the way genres are called
//TODO: fix the posterUrl on backend to be complete rather than having to fix on frontend? 

function App() {
  const [currentUser, setCurrentUser] = useState(1);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [jars, setJars] = useState([]);


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

  const resetJars = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/user/${currentUser}/jar`).then((response) => {
      setJars(response.data);
    })
  }

  useEffect(() => {
    resetJars();
  }, [])

  return (
    <>
      <BrowserRouter>
        <TopNav />

        {/* hide rest of page when sidebar is open on mobile */}
        <div className="page">
          <img
            className={
              isSideBarOpen
                ? "page__sidebar-menu page__sidebar-menu--hidden"
                : "page__sidebar-menu"
            }
            src={sausageMenu}
            onClick={() => setIsSideBarOpen(true)}
            alt=""
          />

          <SideBar
            isOpen={isSideBarOpen}
            setIsOpen={setIsSideBarOpen}
            jars={jars}
            currentUser={currentUser}
            resetJars={resetJars}
          />
          <div
            className={
              isSideBarOpen
                ? "page__content"
                : "page__content page__content--closed-sidebar"
            }
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/jar" element={<DisplayJarPage />} />
              <Route path="/jar/:jarid" element={<DisplayJarPage />} />
              <Route path="/search/:term" element={<AddMoviePage jars={jars} />} />
              <Route path="/search" element={<AddMoviePage jars={jars} />} />
              <Route path="/picker" element={<MoviePickerPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
