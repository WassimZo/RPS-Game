import logo from "./assets/logo-bonus.svg";
import Score from "./components/Score";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-slate-700 to-slate-900 pt-10">
        <div className="w-[80vw] border-4 border-gray-500 flex justify-between px-4 mx-auto py-2 rounded-lg">
          <img
            src={logo}
            className="w-[3.5rem] h-[3.5rem] mx-2 my-4"
            alt="game logo"
          />
          <Score />
        </div>
        <GameContainer />
        {/* Rules button */}
      </div>
    </>
  );
}

export default App;
