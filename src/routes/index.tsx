import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { SlideShowPage } from "../pages/SlideShowPage/SlideShowPage";

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="slideshow" element={<SlideShowPage />} />
        </Route>
      </Routes>
    );
  }