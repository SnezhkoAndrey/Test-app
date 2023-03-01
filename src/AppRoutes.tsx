import React, { Suspense } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { useAppSelector } from "./hooks/dispatchSelectorHooks";
import { selectAuth } from "./redux/authSlice";

const ProfileContainer = React.lazy(() => import("./pages/Profile"));
const NewsContainer = React.lazy(() => import("./pages/News"));

const AppRoutes = () => {
  const auth = useAppSelector(selectAuth);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsContainer />} />
        {auth ? <Route path="/profile" element={<ProfileContainer />} /> : null}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
