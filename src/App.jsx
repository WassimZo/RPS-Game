import logo from "./assets/logo-bonus.svg";
import Score from "./components/Score";
import GameContainer from "./components/GameContainer";
import RulesButton from "./components/RulesButton";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-blue-950 pt-10 flex flex-col items-center">
        <div className="w-[80vw] border-4 border-gray-500 flex justify-between items-center px-4 mx-auto py-2 rounded-lg lg:w-[40vw]">
          <img
            src={logo}
            className="w-[3.5rem] h-[3.5rem]  mx-2 lg:mx-4 my-4 lg:my-8 lg:w-[6.5rem] lg:h-[6.5rem]"
            alt="game logo"
          />
          <Score />
        </div>
        <GameContainer />
        <RulesButton />
      </div>
    </>
  );
}

export default App;
