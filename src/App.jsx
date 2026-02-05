import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navBar";
import { TrailerProvider } from "./context/TrailerContext";

function App() {
  return (
    <div className="bg-imdb-black min-h-screen">
      <TrailerProvider>
        <Navbar />
        <Outlet />
      </TrailerProvider>
    </div>
  );
}

export default App;
