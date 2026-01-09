import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/router.config";

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
