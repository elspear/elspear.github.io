import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";  
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import './App.css';

// Layout component keeps navigation and structure consistent

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <Outlet /> {/* child routes render here */}
      </main>
      <Footer />
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