import Scissors from "./itemsButtons/Scissors";
import Lizard from "./itemsButtons/Lizard";
import Rock from "./itemsButtons/Rock";
import Spock from "./itemsButtons/Spock";
import Paper from "./itemsButtons/Paper";
import defaultIcon from "../assets/GameButtonsIcons/icon-lizard.svg";
import { useSelector, useDispatch } from "react-redux";
import { reset, pick_house, win, loose } from "../features/game";
import housePickRandom from "../utils/HousePickRandom";
import getWinner from "../utils/getWinner";
import { useEffect } from "react";

export default function GameContainer() {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  function getItem(item, picker) {
    switch (item) {
      case "Lizard":
        return (
          <Lizard
            picked={true}
            winner={
              (picker === "user" && game.user_winner) ||
              (picker === "house" && game.house_winner)
            }
          />
        );
      case "Paper":
        return (
          <Paper
            picked={true}
            winner={
              (picker === "user" && game.user_winner) ||
              (picker === "house" && game.house_winner)
            }
          />
        );
      case "Rock":
        return (
          <Rock
            picked={true}
            winner={
              (picker === "user" && game.user_winner) ||
              (picker === "house" && game.house_winner)
            }
          />
        );
      case "Scissors":
        return (
          <Scissors
            picked={true}
            winner={
              (picker === "user" && game.user_winner) ||
              (picker === "house" && game.house_winner)
            }
          />
        );
      case "Spock":
        return (
          <Spock
            picked={true}
            winner={
              (picker === "user" && game.user_winner) ||
              (picker === "house" && game.house_winner)
            }
          />
        );
      default:
        return (
          <div className="p-6 border-[16px] border-transparent bg-black/25 rounded-full">
            <img
              src={defaultIcon}
              alt=""
              className="w-[48px] h-[48px] invisible"
            />
          </div>
        );
    }
  }

  useEffect(() => {
    if (!game.housePick && game.in_game) {
      const timer = setTimeout(() => {
        dispatch(pick_house(housePickRandom()));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [game.in_game]);

  useEffect(() => {
    if (game.housePick && game.in_game) {
      const winner = getWinner(game.userPick, game.housePick);
      if (winner === "user") {
        dispatch(win());
      } else if (winner === "house") {
        dispatch(loose());
      }
    }
  }, [game]);

  return (
    <>
      {game.userPick ? (
        <>
          <div className="mt-10 px-8 w-full flex justify-between">
            <div className="flex flex-col items-center py-2 text-slate-100 tracking-widest">
              {getItem(game.userPick, "user")}
              <span className="mt-3">YOU PICKED</span>
            </div>
            <div className="flex flex-col items-center py-2 text-slate-100 tracking-widest">
              {getItem(game.housePick, "house")}
              <span className="mt-3">THE HOUSE PICKED</span>
            </div>
          </div>
          {game.userPick && game.housePick && (
            <div className="mt-14 flex flex-col  items-center">
              <h1 className="text-slate-100 text-6xl">
                {!game.user_winner && !game.house_winner
                  ? "DRAW"
                  : game.user_winner
                  ? "YOU WIN"
                  : "YOU LOOSE"}
              </h1>
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
