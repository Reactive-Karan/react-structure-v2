import { useMemo } from "react";
import SEO from "../components/common/seo/SEO";
import { filterByRole } from "../utils/filterByRoleUtil";
import { routesData } from "./routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // TODO : Handle roles which we will get from backend and store it in store
  const userRole = "super-admin";

  const useAuthRoutes = useMemo(() => {
    if (userRole?.roleType?.length) {
      return filterByRole(routesData, userRole);
    }
    return routesData;
  }, [userRole]);
  return (
    <>
      <SEO
        title="Learning React Helmet!"
        description="Beginner friendly page for learning React Helmet."
        name="Company name."
        type="article"
      />

      {useAuthRoutes && (
        <RouterProvider router={createBrowserRouter(useAuthRoutes)} />
      )}
    </>
  );
}

export default App;
