import { CssBaseline } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const TeamPage = lazy(() => import("./pages/team/TeamPage"));
const HomePage = lazy(() => import("./pages/home/HomePage"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const Wow = lazy(() => import("./pages/wow/Wow"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='*' element={<Wow />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

