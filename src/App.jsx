import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from './components/Navbar';
import HomePage from "./pages/HomePage";  

// Layout component keeps navigation and structure consistent

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <Outlet /> {/* child routes render here */}
      </main>
    </div>
  );
};

// Router configuration
const router = createBrowserRouter([  // Fixed: createBrowserRouter takes an array
  {
    path: "/",
    element: <Layout />,       // Layout wraps all routes
    children: [
      { path: "/", element: <HomePage /> },  // Changed: Home to HomePage
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;