import { useSelector } from "react-redux";

export default function Score() {
  const game = useSelector((state) => state.game);

  return (
    <div className="bg-slate-100 flex flex-col items-center px-6 rounded-lg">
      <span className="text-slate-700 font-semibold text-xs mt-2 tracking-wider">
        SCORE
      </span>
      <span className="text-5xl text-gray-700 font-bold">{game.score}</span>
    </div>
  );
}
