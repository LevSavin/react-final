import * as React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom"

import Layout from "@/components/Layout";
const HomePage = lazy(() => import("@/pages/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const RestaurantPage = lazy(() => import("@/pages/Restaurant"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={`${process.env.REACT_APP_REPO}/`} element={<Layout/>}>
        <Route
          index
          path={`${process.env.REACT_APP_REPO}/`}
          element={<HomePage/>}
        ></Route>
        <Route
          path={`${process.env.REACT_APP_REPO}/registration`}
          element={<RegisterPage/>
        }></Route>
        <Route 
          path={`${process.env.REACT_APP_REPO}/profile`}
          element={<ProfilePage/>}
        ></Route>
        <Route
          path={`${process.env.REACT_APP_REPO}/restaurant/:id`}
          element={<RestaurantPage/>}
        ></Route>
        <Route
          path="*"
          element={<NotFoundPage/>}
        ></Route>
      </Route>
    </Routes>
  );
}