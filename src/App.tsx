import { Routes, Route, Link } from "react-router-dom";
import GamePage from "./components/pages/GamePage/GamePage";
import NotFound from "./components/pages/NotFound/NotFound";
import StartPage from "./components/pages/StartPage/StartPage";
import Header from "./components/Header/Header";
import PlayersPage from "./components/pages/PlayersPage/PlayersPage";

function App() {
  return (
    <div className="bg-blue-300 h-fit w-screen mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/PlayersPage" element={<PlayersPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
