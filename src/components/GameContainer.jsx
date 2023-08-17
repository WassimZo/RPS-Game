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
  const in_game = useSelector((state) => state.in_game);
  const userPick = useSelector((state) => state.userPick);
  const housePick = useSelector((state) => state.housePick);
  const user_winner = useSelector((state) => state.user_winner);
  const house_winner = useSelector((state) => state.house_winner);
  const dispatch = useDispatch();

  function getItem(item, picker) {
    switch (item) {
      case "Lizard":
        return (
          <Lizard
            picked={true}
            winner={
              (picker === "user" && user_winner) ||
              (picker === "house" && house_winner)
            }
          />
        );
      case "Paper":
        return (
          <Paper
            picked={true}
            winner={
              (picker === "user" && user_winner) ||
              (picker === "house" && house_winner)
            }
          />
        );
      case "Rock":
        return (
          <Rock
            picked={true}
            winner={
              (picker === "user" && user_winner) ||
              (picker === "house" && house_winner)
            }
          />
        );
      case "Scissors":
        return (
          <Scissors
            picked={true}
            winner={
              (picker === "user" && user_winner) ||
              (picker === "house" && house_winner)
            }
          />
        );
      case "Spock":
        return (
          <Spock
            picked={true}
            winner={
              (picker === "user" && user_winner) ||
              (picker === "house" && house_winner)
            }
          />
        );
      default:
        return (
          <div className="p-6 border-[16px] border-transparent bg-black/25 rounded-full xl:p-12 xl:border-[24px] 2xl:p-16 2xl:border-[36px]">
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
    if (!housePick && in_game) {
      const timer = setTimeout(() => {
        dispatch(pick_house(housePickRandom()));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [in_game]);

  useEffect(() => {
    if (housePick && in_game) {
      const winner = getWinner(userPick, housePick);
      if (winner === "user") {
        dispatch(win());
      } else if (winner === "house") {
        dispatch(loose());
      }
    }
  }, [housePick]);

  return (
    <>
      {userPick ? (
        <>
          <div className="mt-10 px-8 w-full flex justify-between  md:w-[60vw]">
            <div className="flex flex-col items-center py-2 text-slate-100 tracking-widest">
              {getItem(userPick, "user")}
              <span className="mt-3 lg:order-first lg:text-4xl lg:mb-20">
                YOU PICKED
              </span>
            </div>
            <div className="flex flex-col items-center py-2 text-slate-100 tracking-widest">
              {getItem(housePick, "house")}
              <span className="mt-3 lg:order-first lg:text-4xl lg:mb-20">
                THE HOUSE PICKED
              </span>
            </div>
          </div>
          {userPick && housePick && (
            <div className="mt-14 flex flex-col items-center 2xl:absolute 2xl:top-[50%]">
              <h1 className="text-slate-100 text-6xl">
                {!user_winner && !house_winner
                  ? "DRAW"
                  : user_winner
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
        <div className="mt-20 bg-[url('/images/bg-pentagon.svg')] bg-no-repeat bg-contain w-[250px] h-[300px] relative lg:w-[500px] lg:h-[600px]">
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
