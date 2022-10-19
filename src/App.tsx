import { Routes, Route, Link } from "react-router-dom";
import GamePage from "./components/pages/GamePage/GamePage";
import NotFound from "./components/pages/NotFound/NotFound";
import StartPage from "./components/pages/StartPage/StartPage";
import Header from "./components/Header/Header";
import PlayersPage from "./components/pages/PlayersPage/PlayersPage";

function App() {
  return (
    <div className="bg-gradient-to-tr from-sky-400 to-blue-400 bg-blue-400 h-fit w-screen min-h-screen mx-auto">
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
