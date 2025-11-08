import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from './components/Navbar';
import HomePage from "./pages/HomePage";  
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

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
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Layout />,       // Layout wraps all routes
    children: [
      { path: "/", element: <HomePage /> }, 
      { path: "/about", element: <AboutPage />},
      { path: "/projects", element: <ProjectsPage />},
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;