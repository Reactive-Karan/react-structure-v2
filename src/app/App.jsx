import { useEffect, useMemo } from "react";
import SEO from "../components/common/seo/SEO";
import { filterByRole } from "../utils/filterByRoleUtil";
import { routesData } from "./routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { listen } from "quicklink";
import { withQuicklink } from "quicklink/dist/react/hoc";

function App() {
  // TODO : Handle roles which we will get from backend and store it in store
  const userRole = "super-admin";

  const useAuthRoutes = useMemo(() => {
    if (userRole?.roleType?.length) {
      return filterByRole(routesData, userRole, withQuicklink);
    }
    return routesData;
  }, [userRole]);

  useEffect(() => {
    // TODO : Do Prefecthing in optimiztation sprint
    window.addEventListener("load", () => {
      listen();
    });
  }, []);

  return (
    <>
      <SEO
        title="SynApp Expertise"
        description="Beginner friendly page for learning React Helmet."
        name="SynApp"
        type="service"
      />

      {useAuthRoutes && (
        <RouterProvider router={createBrowserRouter(useAuthRoutes)} />
      )}
    </>
  );
}

export default App;
