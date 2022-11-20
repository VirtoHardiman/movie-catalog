import { HashRouter, Routes, Route } from "react-router-dom";
import "@fontsource/plus-jakarta-sans";
import "./App.css";

import { MovieList } from "./pages/MovieList";
import { MovieDetail } from "./pages/MovieDetail";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
