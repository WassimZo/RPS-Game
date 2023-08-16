import rockIcon from "../../assets/GameButtonsIcons/icon-rock.svg";
import { useDispatch } from "react-redux";
import { pick } from "../../features/game";

export default function Rock({ picked, winner }) {
  const dispatch = useDispatch();

  return (
    <button
      className={`
      ${
        picked
          ? "p-6 border-[16px]"
          : "absolute top-[180px] left-[150px] p-5 border-[12px]"
      }
      rounded-full border-red-500 bg-slate-100 shadow-[inset_0_5px_rgba(0,0,0,0.2)]
      ${winner && "animate-[shadowPulse_1s_infinite]"} `}
      onClick={() => dispatch(pick("Rock"))}
    >
      <img
        className={picked ? "w-[48px] h-[48px]" : "w-[32px] h-[32px]"}
        src={rockIcon}
        alt="rock"
      />
    </button>
  );
}
