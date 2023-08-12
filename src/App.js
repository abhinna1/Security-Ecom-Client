import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./States/AppProvider";
import ClientRoutes from "./routes/ClientRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import AdminProduct from "./pages/AdminProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <AppProvider>
        <Routes>
          <Route
            path={ClientRoutes.UserRoutes.login_route}
            element={<Login />}
          />
          <Route
            path={ClientRoutes.UserRoutes.register_route}
            element={<Register />}
          />
          <Route
            path={ClientRoutes.AdminRoutes.admin_product_route}
            element={<AdminProduct />}
          />
          <Route
            path={ClientRoutes.AdminRoutes.admin_product_route}
            element={<AdminProduct />}
          />
        </Routes>
        
      </AppProvider>
    </Router>
  );
}

export default App;
