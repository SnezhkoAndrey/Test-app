import React, { Suspense } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";

const ProfileContainer = React.lazy(() => import("./pages/Profile"));
const NewsContainer = React.lazy(() => import("./pages/News"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
