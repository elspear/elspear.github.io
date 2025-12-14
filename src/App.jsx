import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from './components/Navbar';
import HomePage from "./pages/HomePage";  
import './App.css';

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

// Router configuration - single page app
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> }, 
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;