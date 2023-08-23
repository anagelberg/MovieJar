import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviePickerPage from "./pages/MoviePickerPage/MoviePickerPage";
import DisplayJarPage from "./pages/DisplayJarPage/DisplayJarPage";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import TopNav from "./components/TopNav/TopNav";

import { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [currentUser, setCurrentUser] = useState(1);

  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jar" element={<DisplayJarPage />} />
          <Route path="/jar/:jarid" element={<DisplayJarPage />} />
          <Route path="/search/:term" element={<AddMoviePage />} />
          <Route path="/picker" element={<MoviePickerPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
