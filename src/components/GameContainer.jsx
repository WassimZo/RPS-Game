import Scissors from "./itemsButtons/Scissors";
import Lizard from "./itemsButtons/Lizard";
import Rock from "./itemsButtons/Rock";
import Spock from "./itemsButtons/Spock";
import Paper from "./itemsButtons/Paper";
import { useSelector, useDispatch } from "react-redux";
import { reset, housePick } from "../features/game";
import getItem from "../utils/getItem";
import housePickRandom from "../utils/HousePickRandom";
import { useEffect } from "react";

export default function GameContainer() {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!game.computerPick) {
      const timer = setTimeout(() => {
        dispatch(housePick(housePickRandom()));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [game]);

  return (
    <>
      {game.userPick ? (
        <>
          <div className="mt-10 px-8 w-full flex justify-between">
            <div className="flex flex-col items-center py-2 text-slate-100 tracking-widest">
              {getItem(game.userPick)}
              <span className="mt-3">YOU PICKED</span>
            </div>
            <div className="flex flex-col items-center py-2 text-slate-100 tracking-widest">
              {getItem(game.computerPick)}
              <span className="mt-3">THE HOUSE PICKED</span>
            </div>
          </div>
          {game.userPick && game.computerPick && (
            <div className="mt-14 flex flex-col  items-center">
              <h1 className="text-slate-100 text-6xl">YOU WIN</h1>
              <button
                className="mt-8 bg-slate-100 text-blue-900 rounded-md px-14 py-3 text-xl"
                onClick={() => dispatch(reset())}
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-20 bg-[url('/images/bg-pentagon.svg')] bg-no-repeat bg-contain w-[250px] h-[300px] relative">
          <div>
            <Scissors picked={false} />
            <Lizard picked={false} />
            <Rock picked={false} />
            <Paper picked={false} />
            <Spock picked={false} />
          </div>
        </div>
      )}
    </>
  );
}
