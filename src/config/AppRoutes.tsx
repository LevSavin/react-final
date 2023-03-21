import * as React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom"

import Layout from "@/components/Layout";
const HomePage = lazy(() => import("@/pages/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const RestaurantPage = lazy(() => import("@/pages/Restaurant"));
const CartPage = lazy(() => import("@/pages/Cart"));

const publicRoutes = [
  {
    path: `${process.env.REACT_APP_REPO}/`,
    component: HomePage
  },
  {
    path: `${process.env.REACT_APP_REPO}/registration`,
    component: RegisterPage
  },
  {
    path: `${process.env.REACT_APP_REPO}/profile`,
    component: ProfilePage
  },
  {
    path: `${process.env.REACT_APP_REPO}/restaurant/:id`,
    component: RestaurantPage
  },
  {
    path: `${process.env.REACT_APP_REPO}/cart`,
    component: CartPage
  },
  {
    path: "*",
    component: NotFoundPage
  }
]

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={`${process.env.REACT_APP_REPO}/`} element={<Layout/>}>
        {publicRoutes.map(({path, component: Component}) => (
          <Route path={path} element={<Component/>} key={path}/>
        ))}
      </Route>
    </Routes>
  );
}