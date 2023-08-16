import lizardIcon from "../../assets/GameButtonsIcons/icon-lizard.svg";
import { useDispatch } from "react-redux";
import { pick } from "../../features/game";

export default function Lizard({ picked, winner }) {
  const dispatch = useDispatch();

  return (
    <button
      className={`${
        picked ? "p-6 border-[16px] disabled:" : "absolute top-[180px] p-5 border-[12px]"
      }
      rounded-full border-violet-500 bg-slate-100 shadow-[inset_0_5px_rgba(0,0,0,0.2)]
       ${winner && "animate-[shadowPulse_1s_infinite]"}`}
      onClick={() => dispatch(pick("Lizard"))}
    >
      <img
        className={picked ? "w-[48px] h-[48px]" : "w-[32px] h-[32px]"}
        src={lizardIcon}
        alt="lizard"
      />
    </button>
  );
}
