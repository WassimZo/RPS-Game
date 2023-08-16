import scissorsIcon from "../../assets/GameButtonsIcons/icon-scissors.svg";
import { useDispatch } from "react-redux";
import { pick } from "../../features/game";

export default function Scissors({ picked, winner }) {
  const dispatch = useDispatch();

  return (
    <button
      className={`
      ${
        picked
          ? "border-[16px] p-6"
          : "absolute top-[-32px] left-[50%] translate-x-[-50%] border-[12px] p-5"
      }
      rounded-full  border-yellow-500  bg-slate-100 shadow-[inset_0_5px_rgba(0,0,0,0.2)]
      ${winner && "animate-[shadowPulse_1s_infinite]"}
       `}
      onClick={() => dispatch(pick("Scissors"))}
    >
      <img
        className={picked ? "w-[48px] h-[48px]" : "w-[32px] h-[32px]"}
        src={scissorsIcon}
        alt="scissors"
      />
    </button>
  );
}
