import { createBrowserRouter } from "react-router";
import { Presentation } from "./components/Presentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Presentation,
  },
], {
  // Vite sets BASE_URL based on `base` in vite.config.ts.
  basename: import.meta.env.BASE_URL,
});
