import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import BelowNav from "./components/BelowNav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Heros from "./components/Heros";
// import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-500/20 min-h-screen w-full flex flex-col  items-center">
        {/* <h1 className="text-3xl font-bold ">Welcome to EComm Application</h1> */}
        <Router>
          <Navbar />
          <Routes>
            {/* <Route element={<Navbar />} path="/" exact /> */}
            {/* Protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route element={<BelowNav />} path="/products" />
              <Route element={<Heros />} path="/heros" />
            </Route>

            {/* UN-Protected Routes */}
            <Route element={<Login />} path="/login" />
          </Routes>
        </Router>
        <Heros />
        <Footer />
      </div>
    </>
  );
}

export default App;
