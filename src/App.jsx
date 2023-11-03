import { useAtomValue } from "jotai";
import { appStateAtom } from "./store/atoms";

import "./assets/scss/App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import QuizScreen from './pages/Quiz/QuizScreen/QuizScreen'
import GameFinished from "./pages/Game Finished/GameFinished";
import Welcome from "./pages/Welcome/Welcome";

function App() {
  const appState = useAtomValue(appStateAtom);

  return (
    <>
      <Navbar />
      {appState === "home" ? (
        <Home />
      ) : appState === "welcome" ? (
        <Welcome/>
      ) : appState === "quiz" ? (
        <QuizScreen/>
      ) : (
        <GameFinished />
      ) 
      }
    </>
  );
}

export default App;
