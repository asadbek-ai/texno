import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Destination from "./pages/Destination";
import CreateDestination from "./pages/CreateDestination";
import Users from "./pages/Users";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/destination" element={<Destination />} />
        <Route path="/create-des" element={<CreateDestination />} />
        <Route path="/user" element={<Users />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
