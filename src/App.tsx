import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ROUTES from "./routes";

const router = createBrowserRouter(ROUTES, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  } as any
});


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
