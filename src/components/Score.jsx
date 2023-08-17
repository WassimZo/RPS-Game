import { useSelector } from "react-redux";

export default function Score() {
  const game = useSelector((state) => state.game);

  return (
    <div className="bg-slate-100 flex flex-col items-center px-6 py-2 rounded-lg lg:justify-center lg:py-2 lg:px-14">
      <span className="text-slate-700 font-semibold text-xs tracking-wider lg:text-xl lg:mt-0">
        SCORE
      </span>
      <span className="text-5xl text-gray-700 font-bold lg:text-8xl">
        {game.score}
      </span>
    </div>
  );
}
