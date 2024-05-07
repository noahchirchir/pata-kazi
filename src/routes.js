import Home from "./components/Home";
import FindTalent from "./components/FindTalent";
import FindWork from "./components/FindWork";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/find-talent",
    element: <FindTalent />,
    errorElement: <ErrorPage />
  },
  {
    path: "/find-work",
    element: <FindWork />,
    errorElement: <ErrorPage />
  }
];

export default routes;