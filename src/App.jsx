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

function App() {
  const [currentUser, setCurrentUser] = useState(1);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

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

  const jars = {
    movieJars: [
      { name: "Crowd Pleasers", id: 1, creator: 1 },
      { name: "Girls Night", id: 2, creator: 1 },
      { name: "Solo", id: 3, creator: 1 },
    ],
  };

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
            jars={jars.movieJars}
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
              <Route path="/search/:term" element={<AddMoviePage />} />
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
