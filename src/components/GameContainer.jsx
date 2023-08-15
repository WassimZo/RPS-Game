import Scissors from "./itemsButtons/Scissors";

export default function GameContainer() {
  return (
    <div className="w-full flex justify-center items-center mt-20 bg-[url('/images/bg-pentagon.svg')] bg-no-repeat bg-contain bg bg-center relative">
      <Scissors className="absolute top-1 left-0" />
    </div>
  );
}
