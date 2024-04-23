import Title from "./components/Title";
import Todos from "./components/Todos";
import useFetch from "./hooks/useFetch";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import MainLayout from "./layouts/MainLayout";

function App() {
  const {
    data: todos,
    error,
    isPending,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
  // <div>
  //   <Title title="All todos" counter={todos ? todos.length : 0} />
  //   {isPending && <h2>Loading...</h2>}
  //   {error && <h2>{error}</h2>}
  //   <ul>
  //     <Todos todos={todos} />
  //   </ul>
  // </div>
}

export default App;
