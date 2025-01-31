import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  Routes,
  useLocation,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GetStarted from "./components/GetStarted/GetStarted.tsx";
import Home from "./components/Home/Home.tsx";
import Loading from "./components/Loading/Loading.tsx";
import App from "./App.tsx";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<GetStarted />} />
        <Route path="loading" element={<Loading />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/personal-finance-app/">
      <AnimatedRoutes />
    </HashRouter>
    <App></App>
  </React.StrictMode>
);
