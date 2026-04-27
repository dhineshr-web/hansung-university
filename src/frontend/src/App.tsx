import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import CampusLifePage from "./pages/CampusLifePage";
import HomePage from "./pages/HomePage";
import InternationalPage from "./pages/InternationalPage";
import ResearchPage from "./pages/ResearchPage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admissions",
  component: AdmissionsPage,
});
const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: AcademicsPage,
});
const researchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/research",
  component: ResearchPage,
});
const campuslifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/campuslife",
  component: CampusLifePage,
});
const internationalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/international",
  component: InternationalPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  admissionsRoute,
  academicsRoute,
  researchRoute,
  campuslifeRoute,
  internationalRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
