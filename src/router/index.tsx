import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Series from "../pages/Series";
import Slide from "../pages/Slide";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/slides/:id" element={<Slide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
