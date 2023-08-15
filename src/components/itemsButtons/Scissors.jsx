import scissorsIcon from "../../assets/GameButtonsIcons/icon-scissors.svg";

export default function Scissors() {
  return (
    <button className="rounded-full border-[12px] border-yellow-500 p-5 bg-slate-100 shadow-[inset_0_5px_rgba(0,0,0,0.2)] absolute top-1 left-0">
      <img className="w-[32px] h-[32px] " src={scissorsIcon} alt="scissors" />
    </button>
  );
}
