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
          ? "border-[16px] p-6 2xl:p-16 2xl:border-[36px] 2xl:shadow-[inset_0_15px_rgba(0,0,0,0.2)] xl:p-12 xl:border-[24px] xl:shadow-[inset_0_10px_rgba(0,0,0,0.2)]"
          : "absolute top-[-32px] left-[50%] translate-x-[-50%] border-[12px] p-5 lg:top-[-64px] lg:border-[24px] lg:p-10"
      }
      rounded-full  border-yellow-500  bg-slate-100 shadow-[inset_0_5px_rgba(0,0,0,0.2)]
      ${winner && "animate-[shadowPulse_1s_infinite]"}
       `}
      onClick={() => dispatch(pick("Scissors"))}
      disabled={picked}
    >
      <img
        className={
          picked
            ? "w-[48px] h-[48px] 2xl:w-[96px] 2xl:h-[96px]"
            : "w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"
        }
        src={scissorsIcon}
        alt="scissors"
      />
    </button>
  );
}
