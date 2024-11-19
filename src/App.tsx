import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ROUTES from "./routes";
import { useEffect, useState } from "react";
import Spinner from "./components/shared/Spinner/Spinner";

const router = createBrowserRouter(ROUTES, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  } as any,
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      )}
    </div>
  );
}

export default App;
