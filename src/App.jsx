import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import SingleBlogPost from "./pages/SingleBlogPost";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:id" element={<SingleBlogPost />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}



