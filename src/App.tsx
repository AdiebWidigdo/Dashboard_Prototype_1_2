import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Logout from "./pages/logout";
import Profile from "./pages/profile";
import InGameInventoryItem from "./pages/in-game-inventory-item";
import MemoryFragment from "./pages/memory-fragment";
import PlacedBookmark from "./pages/placed-bookmark";
import DashboardBasic from "./pages/dashboard-basic";
import PrototypeDashboard from "./pages/prototype-dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/in-game-inventory-item":
        title = "";
        metaDescription = "";
        break;
      case "/memory-fragment":
        title = "";
        metaDescription = "";
        break;
      case "/placedbookmark":
        title = "";
        metaDescription = "";
        break;
      case "/prototypedashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboardmobile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Logout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/in-game-inventory-item" element={<InGameInventoryItem />} />
      <Route path="/memory-fragment" element={<MemoryFragment />} />
      <Route path="/placedbookmark" element={<PlacedBookmark />} />
      <Route path="/prototypedashboard" element={<DashboardBasic />} />
      <Route path="/dashboardmobile" element={<PrototypeDashboard />} />
    </Routes>
  );
}
export default App;
