import spockIcon from "../../assets/GameButtonsIcons/icon-spock.svg";
import { useDispatch } from "react-redux";
import { pick } from "../../features/game";

export default function Spock({ picked, winner }) {
  const dispatch = useDispatch();

  return (
    <button
      className={`
      ${
        picked
          ? "border-[16px] p-6"
          : "absolute top-[50px] left-[-30px] border-[12px] p-5"
      }
      rounded-full border-cyan-500 bg-slate-100 shadow-[inset_0_5px_rgba(0,0,0,0.2)]
      ${winner && "animate-[shadowPulse_1s_infinite]"}
      `}
      onClick={() => dispatch(pick("Spock"))}
    >
      <img
        className={picked ? "w-[48px] h-[48px]" : "w-[32px] h-[32px]"}
        src={spockIcon}
        alt="rock"
      />
    </button>
  );
}
